const pushToArray = (seat, array) => {
    const ids = array.map(s => s.id)
    const idx = ids.indexOf(seat.id)

    if(idx === -1){
        array.push(seat)
    }else{
        array.splice(idx,1)
    }
}

export { pushToArray }