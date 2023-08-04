
function pagination(model, page, limit){
    const startIndex = (page-1)*limit
    const endIndex = page*limit
    const results = model.slice(startIndex, endIndex)
    
    return results
}


module.exports = pagination