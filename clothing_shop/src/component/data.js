import React from "react"
import { v4 as uuidv4 } from 'uuid';

export function GenerateData() {
    const initData = [
        {
            id: uuidv4(),
            cate: "TOPS",
            img : "https://tummachines.com/wp-content/uploads/2022/04/top-430x645.jpg",
            list_item: [
                {
                    product: "TF EMBOSSED TEE- black",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/06/WEB-ESSENTIAL-TEE-TF-BLACK-8.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/06/WEB-ESSENTIAL-TEE-TF-BLACK-7.jpg",
                    type : 'TOPS',
                    typeALl : 'all',
                },
                {

                    product: "TF EMBOSSED TEE - Sacramento",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/06/WEB-ESSENTIAL-TEE-TF-GREEN-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/06/WEB-ESSENTIAL-TEE-TF-GREEN-2.jpg",
                    type : 'TOPS',
                    typeALl : 'all',
                },
                {

                    product: "NO TIME FOR CRY T-shirt",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/04/no-time-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/04/no-time-2.jpg",
                    type : 'TOPS',
                    typeALl : 'all',
                },
                {

                    product: "Anniversary T-shirt",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/04/anni-2.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/04/anni-1.jpg",
                    type : 'TOPS',
                    typeALl : 'all',
                },
                {

                    product: "RIDE TO LIVE Tee",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/04/RAcing-3.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/04/RAcing-4.jpg",
                    type : 'TOPS',
                    typeALl : 'all',
                },
                {

                    product: "BAD DREAM T-shirt",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/04/bad-dream-2-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/04/bad-dream-1-1-1.jpg",
                    type : 'TOPS',
                    typeALl : 'all',
                },
                {

                    product: "Anniversary T-shirt",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/04/bad-dream-1-1-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/04/robo-tee-detailed-4.jpg",
                    type : 'TOPS',
                    typeALl : 'all',
                },
                {

                    product: "RIDE TO LIVE Tee",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/04/RAcing-3.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/04/RAcing-4.jpg",
                    type : 'TOPS',
                    typeALl : 'all',
                },
                {

                    product: "BAD DREAM T-shirt",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/04/bad-dream-2-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/04/bad-dream-1-1-1.jpg",
                    type : 'TOPS',
                    typeALl : 'all',
                },
            ]
        },
        {
            id: uuidv4(),
            cate: "DENIM",
            img : "https://tummachines.com/wp-content/uploads/2022/04/denim-430x645.jpg",
            list_item: [
                {
                    product: "STRAIGHT DENIM - Mattle Black",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/06/WEB-ESSENTIAL-DENIM-BLACK-8.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/06/WEB-ESSENTIAL-DENIM-BLACK-7.jpg",
                    type : "DENIM",
                    typeAll : "all",
                },
                {
                    product: "STRAIGHT DENIM - Vintage Blue",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/06/WEB-ESSENTIAL-DENIM-BLUE-5.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/06/WEB-ESSENTIAL-DENIM-BLUE-6.jpg",
                    type : "DENIM",
                    typeAll : "all",
                },
                {
                    product: "FLARE DENIM - Vintage Blue",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/04/flare-xanh-3.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/04/flare-xanh-1.jpg",
                    type : "DENIM",
                    typeAll : "all",
                },
                {
                    product: "FLARE DENIM - Dark Grey",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/01/flare-denim-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/01/flare-denim-3.jpg",
                    type : "DENIM",
                    typeAll : "all",
                },
                {
                    product: "Cropped Denim - Blue Stone",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/04/CROP-BLUE-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/04/CROP-BLUE-2.jpg",
                    type : "DENIM",
                    typeAll : "all",
                },
                {
                    product: "Cropped Denim - Black",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/04/CROP-BLack-2.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/04/CROP-BLack-1.jpg",
                    type : "DENIM",
                    typeAll : "all",
                },
                {
                    product: "OLD BOY DENIM - Vintage Grey",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/02/oldboy-denim-7.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/02/oldboy-denim-8.jpg",
                    type : "DENIM",
                    typeAll : "all",
                },
                {
                    product: "DIP DYE DENIM SHORT - Blue",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2021/11/short-jean-blue-6.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2021/11/short-jean-blue-8.jpg",
                    type : "DENIM",
                    typeAll : "all",
                },
                {
                    product: "2 WAYS DENIM",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2021/06/jean-2-mau-8.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2021/06/jean-2-mau-9.jpg",
                    type : "DENIM",
                    typeAll : "all",
                },

            ]
        },
        {
            id: uuidv4(),
            cate: "BOTTOMS",
            img : "https://tummachines.com/wp-content/uploads/2022/04/bottom-430x645.jpg",
            list_item: [
                {
                    product: "CORDUROY SHORT - Black",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/06/WEB-CORDUROY-SHORT-BLACK-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/06/WEB-CORDUROY-SHORT-BLACK-2.jpg",
                    type : "BOTTOMS",
                    typeAll : "all"
                },
                {
                    product: "CORDUROY SHORT - Begie",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/06/WEB-CORDUROY-SHORT-BEIGE-9.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/06/WEB-CORDUROY-SHORT-BEIGE-10.jpg",
                    type : "BOTTOMS",
                    typeAll : "all"
                },
                {
                    product: "BOBBY TROUSER - Black",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/bobby-3.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/bobby-2.jpg",
                    type : "BOTTOMS",
                    typeAll : "all"
                },
                {
                    product: "TROUSER - Black",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/trouser-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/trouser-2.jpg",
                    type : "BOTTOMS",
                    typeAll : "all"
                },
                {
                    product: "BLANK: PANT-Black",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/DEN-DA%CC%80I-2.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/DEN-DA%CC%80I-1.jpg",
                    type : "BOTTOMS",
                    typeAll : "all"
                },
                {
                    product: "BLANK: SHORT-Black",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/DEN-SHORT-5.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/DEN-SHORT-9.jpg",
                    type : "BOTTOMS",
                    typeAll : "all"
                },
                {
                    product: "BLANK: PANT-Earth",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/NA%CC%82U-DA%CC%80I-10.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/NA%CC%82U-DA%CC%80I-9.jpg",
                    type : "BOTTOMS",
                    typeAll : "all"
                },
                {
                    product: "BLANK: SHORT-Earth",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/NA%CC%82U-SHORT-7.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/NA%CC%82U-SHORT-6.jpg",
                    type : "BOTTOMS",
                    typeAll : "all"
                },
                {
                    product: "BLANK: PANT-Grey",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/XA%CC%81M-DA%CC%80I-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/XA%CC%81M-DA%CC%80I-4.jpg",
                    type : "BOTTOMS",
                    typeAll : "all"
                },
            ]
        },
        {
            id: uuidv4(),
            cate: "Outwear",
            img : "https://tummachines.com/wp-content/uploads/2022/04/outwear-430x645.jpg",
            list_item: [
                {
                    product: "CORDUROY SHORT - Black",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/06/WEB-CORDUROY-SHORT-BLACK-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/06/WEB-CORDUROY-SHORT-BLACK-2.jpg",
                    type : "Outwear",
                    typeAll : "all",
                },
                {
                    product: "CORDUROY SHORT - Begie",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/06/WEB-CORDUROY-SHORT-BEIGE-9.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/06/WEB-CORDUROY-SHORT-BEIGE-10.jpg",
                    type : "Outwear",
                    typeAll : "all",
                },
                {
                    product: "BOBBY TROUSER - Black",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/bobby-3.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/bobby-2.jpg",
                    type : "Outwear",
                    typeAll : "all",
                },
                {
                    product: "TROUSER - Black",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/trouser-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/trouser-2.jpg",
                    type : "Outwear",
                    typeAll : "all",
                },
                {
                    product: "BLANK: PANT-Black",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/DEN-DA%CC%80I-2.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/DEN-DA%CC%80I-1.jpg",
                    type : "Outwear",
                    typeAll : "all",
                },
                {
                    product: "BLANK: SHORT-Black",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/DEN-SHORT-5.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/DEN-SHORT-9.jpg",
                    type : "Outwear",
                    typeAll : "all",
                },
                {
                    product: "BLANK: PANT-Earth",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/NA%CC%82U-DA%CC%80I-10.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/NA%CC%82U-DA%CC%80I-9.jpg",
                    type : "Outwear",
                    typeAll : "all",
                },
                {
                    product: "BLANK: SHORT-Earth",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/NA%CC%82U-SHORT-7.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/NA%CC%82U-SHORT-6.jpg",
                    type : "Outwear",
                    typeAll : "all",
                },
                {
                    product: "BLANK: PANT-Grey",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/XA%CC%81M-DA%CC%80I-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/XA%CC%81M-DA%CC%80I-4.jpg",
                    type : "Outwear",
                    typeAll : "all",
                },
            ]
        },
        {
            id: uuidv4(),
            cate: "Accessories",
            img : "https://tummachines.com/wp-content/uploads/2022/04/accessories-430x645.jpg",
            list_item: [
                {
                    product: "CORDUROY SHORT - Black",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/06/WEB-XI%CC%81CH-QUA%CC%82%CC%80N-1-5.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/06/WEB-CORDUROY-SHORT-BLACK-2.jpg",
                    type : "Accessories",
                    typeAll : "all"
                },
                {
                    product: "CORDUROY SHORT - Begie",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/06/WEB-CORDUROY-SHORT-BEIGE-9.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/06/WEB-CORDUROY-SHORT-BEIGE-10.jpg",
                    type : "Accessories",
                    typeAll : "all"
                },
                {
                    product: "BOBBY TROUSER - Black",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/bobby-3.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/bobby-2.jpg",
                    type : "Accessories",
                    typeAll : "all"
                },
                {
                    product: "TROUSER - Black",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/trouser-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/trouser-2.jpg",
                    type : "Accessories",
                    typeAll : "all"
                },
                {
                    product: "BLANK: PANT-Black",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/DEN-DA%CC%80I-2.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/DEN-DA%CC%80I-1.jpg",
                    type : "Accessories",
                    typeAll : "all"
                },
                {
                    product: "BLANK: SHORT-Black",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/DEN-SHORT-5.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/DEN-SHORT-9.jpg",
                    type : "Accessories",
                    typeAll : "all"
                },
                {
                    product: "BLANK: PANT-Earth",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/NA%CC%82U-DA%CC%80I-10.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/NA%CC%82U-DA%CC%80I-9.jpg",
                    type : "Accessories",
                    typeAll : "all"
                },
                {
                    product: "BLANK: SHORT-Earth",
                    price: "380,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/NA%CC%82U-SHORT-7.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/NA%CC%82U-SHORT-6.jpg",
                    type : "Accessories",
                    typeAll : "all"
                },
                {
                    product: "BLANK: PANT-Grey",
                    price: "350,000",
                    img1: "https://tummachines.com/wp-content/uploads/2022/05/XA%CC%81M-DA%CC%80I-1.jpg",
                    img2: "https://tummachines.com/wp-content/uploads/2022/05/XA%CC%81M-DA%CC%80I-4.jpg",
                    type : "Accessories",
                    typeAll : "all"
                },
            ]
        },
    ]
    if(!localStorage.getItem('product')){
        localStorage.setItem('product',JSON.stringify(initData))
    }
}

GenerateData()
export function GetData(){
    let json = localStorage.getItem('product')
    return !json ? [] : JSON.parse(json)
}
GetData()
export function getAllProduct(){
    const data = GetData()
    let allProduct = [] 
    const product = data.map((item)=>{
        return item.list_item.map((itemProduct)=>{
            allProduct.push(itemProduct)
        })
    })
    localStorage.setItem('allproduct',JSON.stringify(allProduct))
}
export function getAllProductFormLocal(){
    let json = localStorage.getItem('allproduct')
    return !json ? [] : JSON.parse(json)
}
