import React, {Component} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { getBrowseCategories } from '../../../data';
import styles from '../styles/BrowseCategoryList.component.style';
import CategoryCard from './CategoryCard';

class BrowseCategoryList extends Component {
    constructor(props){
        super(props);

        this.state = {
            categories:[]
        }
    }

    componentDidMount() {
        this.getCategories();
    }

    async getCategories() {
        let categoriesData = []
        
        return getBrowseCategories(this.props.authToken)
        .then(categories => {
            categories.categories.items.forEach((category, index) => {
                let categoryData = {}
                categoryData.key = index
                categoryData.name = category.name

                categoriesData.push(categoryData);
            })
        })
        .then(() => {
            this.setState(prevState => {
                return {
                    categories: [...prevState.categories, ...categoriesData]
                }
            })
        })
     }

     renderCategory(category) {
        return( 
            <CategoryCard key={category.key} category={category.name} />
        );
     }

    render() {
        return(
            <View style={styles.container}>
                { isEmpty(this.state.categories) ? <ActivityIndicator size='large' /> :
                    this.state.categories.map(item => this.renderCategory(item))
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authToken: state.auth,
    }
}

export default connect(mapStateToProps)(BrowseCategoryList);
