export interface NewsModel{
    topic : string,
    publisher : string,
    title : string,
    time : string,
    image:string,
    url :string,
    reference : SubNews[],
    fullCover : string
};
export interface SubNews{
    publisher : string,
    title : string,
    time : string,
    url : string
};