import Vue from 'vuex'

export const loadData = ( {commit} ) => {
    Vue.http.get('data.json')
    .then( response => response.json())
    .then(data => {
        if(data){
            const stock = data.stocks;
            const funds = data.funds;
            const stockPortfolio = data.stockPortfolio

            const portfolio  = {
                stockPortfolio,
                funds
            }
            commit('SET_STOCKS', stocks);
            commit('SET_PORTFOLIO', portfolio);
        }
    })
}