
function guessCity(capital, coastal, famous, ancient) {
    if(capital && !coastal && famous && ancient)
    return "jerusalem";
    else if(!capital && coastal && famous && !ancient ) return "Tel-Aviv";
    else if (!capital && coastal && !famous && ancient) return "Acre";
    else if (!capital && !coastal && !famous && ancient)return "Katzrin";
    else if (!capital && coastal && !famous && !ancient)return "Zikim";
    else if(!capital && !coastal && !famous && !ancient) return "Musmus";
    else return "city can not be found";

}
console.log(guessCity(true,true,false,true));










