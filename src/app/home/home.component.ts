import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../service/api.service';
import {AuthService} from '../service/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public filterCategory: any;
  searchKey: any;
  searchTerm: string = "";
  public customfilter: any ='';
  searchdata: any;
  public productArray : any;

  constructor(private auth: AuthService, private http: HttpClient, private api: ApiService) { }

  ngOnInit(): void {
    // this.filterCategory = this.productArray;
    // this.productArray.forEach((a:any)=> {
    //   if(a.category === "women's clothing" || a.category === "men's clothing"){
    //     a.category = "fashion"
    //   }
    // });
    // console.log(this.productArray);
    // this.auth.search.subscribe((val:any) => {
    //   this.searchKey = val;
    // })


    this.api.getProductIn()
    .subscribe(res => {
      this.productArray = res;
      this.filterCategory = res;
      // now in json object which we have does not have quantity and total fields
      // so to add in json object we need to do below part
      this.productArray.forEach((a:any) => {
        if(a.category === "men's clothing" || a.category === "women's clothing") {
          a.category = "fashion"
        }
        // Object.assign(a,{quantity: 1, total: a.price}); // remove this if using db.json
      });
      console.log(this.productArray)
    });
    this.auth.search.subscribe((val:any) => {
      this.searchKey = val;
    })
  };

//  productArray  = [
//     {
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "men's clothing",
//         "quantity": 1,
//         "image": "../../assets/images/mens-cloth.jpg",
//         "rating": {
//             "rate": 3.9,
//             "count": 120
//         }
//     },
//     {
//         "id": 2,
//         "title": "Mens Casual Premium Slim Fit T-Shirts ",
//         "price": 22.3,
//         "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//         "category": "men's clothing",
//         "quantity": 1,
//         "image": "../../assets/images/mens-cloth1.jpg",
//         "rating": {
//             "rate": 4.1,
//             "count": 259
//         }
//     },
//     {
//         "id": 3,
//         "title": "Mens Cotton Jacket",
//         "price": 55.99,
//         "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//         "category": "men's clothing",
//         "quantity": 1,
//         "image": "../../assets/images/mens-cloth4.jpg",
//         "rating": {
//             "rate": 4.7,
//             "count": 500
//         }
//     },
//     {
//         "id": 4,
//         "title": "Mens Casual Slim Fit",
//         "price": 15.99,
//         "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//         "category": "men's clothing",
//         "quantity": 1,
//         "image": "../../assets/images/mens-cloth3.jpg",
//         "rating": {
//             "rate": 2.1,
//             "count": 430
//         }
//     },
//     {
//         "id": 5,
//         "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//         "price": 695,
//         "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//         "category": "jewelery",
//         "quantity": 1,
//         "image": "../../assets/images/j4.jpg",
//         "rating": {
//             "rate": 4.6,
//             "count": 400
//         }
//     },
//     {
//         "id": 6,
//         "title": "Solid Gold Petite Micropave ",
//         "price": 168,
//         "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//         "category": "jewelery",
//          "quantity": 1,
//         "image": "../../assets/images/j3.jpg",
//         "rating": {
//             "rate": 3.9,
//             "count": 70
//         }
//     },
//     {
//         "id": 7,
//         "title": "White Gold Plated Princess",
//         "price": 9.99,
//         "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//         "category": "jewelery",
//         "quantity": 1,
//         "image": "../../assets/images/j5.jpg",
//         "rating": {
//             "rate": 3,
//             "count": 400
//         }
//     },
//     {
//         "id": 8,
//         "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
//         "price": 10.99,
//         "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//         "category": "jewelery",
//         "quantity": 1,
//         "image": "../../assets/images/j2.png",
//         "rating": {
//             "rate": 1.9,
//             "count": 100
//         }
//     },
//     {
//         "id": 9,
//         "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//         "price": 64,
//         "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//         "category": "electronics",
//         "quantity": 1,
//         "image": "../../assets/images/electronics.jpg",
//         "rating": {
//             "rate": 3.3,
//             "count": 203
//         }
//     },
//     {
//         "id": 10,
//         "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//         "price": 109,
//         "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//         "category": "electronics",
//         "quantity": 1,
//         "image": "../../assets/images/electronics.jpg",
//         "rating": {
//             "rate": 2.9,
//             "count": 470
//         }
//     },
//     {
//         "id": 11,
//         "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//         "price": 109,
//         "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//         "category": "electronics",
//         "quantity": 1,
//         "image": "../../assets/images/electronics.jpg",
//         "rating": {
//             "rate": 4.8,
//             "count": 319
//         }
//     },
//     {
//         "id": 12,
//         "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//         "price": 114,
//         "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//         "category": "electronics",
//         "quantity": 1,
//         "image": "../../assets/images/electronics.jpg",
//         "rating": {
//             "rate": 4.8,
//             "count": 400
//         }
//     },
//     {
//         "id": 13,
//         "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//         "price": 599,
//         "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//         "category": "electronics",
//         "quantity": 1,
//         "image": "../../assets/images/electronics.jpg",
//         "rating": {
//             "rate": 2.9,
//             "count": 250
//         }
//     },
//     {
//         "id": 14,
//         "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//         "price": 999.99,
//         "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//         "category": "electronics",
//         "quantity": 1,
//         "image": "../../assets/images/electronics.jpg",
//         "rating": {
//             "rate": 2.2,
//             "count": 140
//         }
//     },
//     {
//         "id": 15,
//         "title": "BIYLACLESEN Women's 3-in-1 Kurti",
//         "price": 56.99,
//         "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester;",
//         "category": "women's clothing",
//         "quantity": 1,
//         "image": "../../assets/images/womens6.jpg",
//         "rating": {
//             "rate": 2.6,
//             "count": 235
//         }
//     },
//     {
//         "id": 16,
//         "title": "Lock and Love Women's Kurtis",
//         "price": 29.95,
//         "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides",
//         "category": "women's clothing",
//         "quantity": 1,
//         "image": "../../assets/images/womes5.jpg",
//         "rating": {
//             "rate": 2.9,
//             "count": 340
//         }
//     },
//     {
//         "id": 17,
//         "title": "Women Windbreaker Striped Top",
//         "price": 39.99,
//         "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//         "category": "women's clothing",
//         "quantity": 1,
//         "image": "../../assets/images/womens3.jpeg",
//         "rating": {
//             "rate": 3.8,
//             "count": 679
//         }
//     },
//     {
//         "id": 18,
//         "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
//         "price": 9.85,
//         "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//         "category": "women's clothing",
//         "quantity": 1,
//         "image": "../../assets/images/womens2.jpg",
//         "rating": {
//             "rate": 4.7,
//             "count": 130
//         }
//     },
//     {
//         "id": 19,
//         "title": "Opna Women's Short Sleeve Moisture",
//         "price": 7.95,
//         "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek",
//         "category": "women's clothing",
//         "quantity": 1,
//         "image": "../../assets/images/women.jpg",
//         "rating": {
//             "rate": 4.5,
//             "count": 146
//         }
//     },
//     {
//         "id": 20,
//         "title": "Black High Neck Cropped Top",
//         "price": 12.99,
//         "description": "Black solid knitted crop top, has a high neck, and long sleeves",
//         "category": "women's clothing",
//         "quantity": 1,
//         "image": "../../assets/images/womens.jpg",
//         "rating": {
//             "rate": 3.6,
//             "count": 145
//         }
//     },
//     {
//       "id": 21,
//       "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
//       "price": 10.99,
//       "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//       "category": "jewelery",
//       "quantity": 1,
//       "image": "../../assets/images/jewelery.jpg",
//       "rating": {
//           "rate": 1.9,
//           "count": 100
//       }
//   },
// ];
dec(prod) {
  if(prod.quantity != 1){
    prod.quantity -=  1;
  }
}
inc(prod) {
  if(prod.quantity != 5){
    prod.quantity +=  1;
  }
}

itemCart: any = [];
addCart(prod) {
  // console.log(prod);
  let cartDataNull = localStorage.getItem('localCart');
  if(cartDataNull == null){
    let storeDataGet: any = [];
    storeDataGet.push(prod);
    localStorage.setItem('localCart', JSON.stringify(storeDataGet));
  }else {
    var pid = prod.id;
    let index: number = -1; //if u see only one value shows in localcart if we click on add to cart again then that value get replaceed that means condition false shows -1
    this.itemCart = JSON.parse(localStorage.getItem('localCart'));
     // now if user again click on addtocart with incresing quantity then it willl only update quantity
    for(let i=0; i<this.itemCart.length; i++) {
      if(parseInt(pid) === parseInt(this.itemCart[i].id)){
        this.itemCart[i].quantity = prod.quantity;
        index = i;
        break;
      }
    }
      if(index == -1) {
        this.itemCart.push(prod);
        localStorage.setItem('localCart', JSON.stringify(this.itemCart));
      }else {
        localStorage.setItem('localCart', JSON.stringify(this.itemCart));
      }
  }
  this.cartNumberFun();
  // localStorage.setItem('localCart', JSON.stringify(prod));
}

// cart count number display
cartNumber: number = 0;
cartNumberFun() {
  var cartValue = JSON.parse(localStorage.getItem('localCart'));
  this.cartNumber = cartValue.length;
  this.auth.cartSubject.next(this.cartNumber);
  // console.log(this.cartNumber);
}

 // for products category
 filter(category:string) {
  this.filterCategory = this.productArray
  .filter((a:any) => {
    if(a.category == category || category == ''){
      return a;
    }
  })
}
getOneIn(id: any) {
  return this.http.get<any>("http://localhost:3000/productArray/"+ id)
  .pipe(map((res:any) => {
    return res;
  }))
}
}
