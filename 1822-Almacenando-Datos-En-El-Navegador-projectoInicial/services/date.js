export const uniqueDates = (task) =>{
    const unique =[];


    task.forEach((task) => {
        if(!unique.includes(task.dateformat)) unique.push(task.dateformat);
    });
    return(unique);
}
export const orderDates=(dates)=>{
    return dates.sort((a, b) =>{
        const firstDate=moment(a,'DD/MM/YYYY');
        const secondDate=moment(b,'DD/MM/YYYY');
        return firstDate-secondDate;
    })
}