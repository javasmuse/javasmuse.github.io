fetch('https://api.windy.com/api/webcams/v2/list/category=beach/country=IT/orderby=popularity,desc/limit=20?Xt36Ggwve9BzZlKpksj5un84AoujvTyI').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    console.log(data.name);

}).catch((err) => {
    console.log(err);

});