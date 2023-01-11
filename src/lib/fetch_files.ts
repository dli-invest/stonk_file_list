export const getFiles = (): Promise<string[]> => fetch("https://stock_list.deta.dev/files")
.then(response => response.json())
.then((data: string[]) => {
    // sort data
    return data.reverse();

}).catch(error => {
    console.log(error);
    return [];
});