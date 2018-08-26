const numberFormat = (number) => {
    const comma = ',',
        string = Math.max(0, number).toFixed(0),
        length = string.length,
        end = /^\d{4,}$/.test(string) ? length % 3 : 0;
    return (end ? string.slice(0, end) + comma : '') + string.slice(end).replace(/(\d{3})(?=\d)/g, '$1' + comma);
}

exports.followers = (number) => {
    return numberFormat(number) + ' FOLLOWERS'
}