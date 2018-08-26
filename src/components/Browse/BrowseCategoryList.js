import React, {Component} from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { getBrowseCategories } from '../../../data';

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
        return <Text style={{color:'white'}}>{category.name}</Text>
     }

    render() {
        return(
            <View>
                {this.state.categories.map(item => this.renderCategory(item))}
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
