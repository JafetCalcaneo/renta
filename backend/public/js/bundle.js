(()=>{"use strict";var e=["second","minute","hour","day","week","month","year"],t=["秒","分钟","小时","天","周","个月","年"],a={},n=function(e,t){a[e]=t};n("en_US",(function(t,a){if(0===a)return["just now","right now"];var n=e[Math.floor(a/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]})),n("zh_CN",(function(e,a){if(0===a)return["刚刚","片刻后"];var n=t[~~(a/2)];return[e+" "+n+"前",e+" "+n+"后"]}));const r=new class{constructor(){this.URI="http://localhost:3000/api/carros"}async getCars(){return(await fetch(this.URI)).json()}async postCars(e){const t=await fetch(this.URI,{method:"POST",body:e}),a=await t.json();console.log(a)}async deleteCar(e){const t=await fetch(`${this.URI}/${e}`,{headers:{"Content-Type":"application/json"},method:"DELETE"}),a=await t.json();console.log(a)}},c=class{async renderCars(){const e=await r.getCars(),t=document.getElementById("carros-cards");t.innerHTML="",e.forEach((e=>{const a=document.createElement("div");a.className="",a.innerHTML=`\n                <div class="card m-2">\n                    <div class="row">\n                        <div class="col-md-4">\n                            <img src="http://localhost:3000${e.imagePath}" alt="" class="img-fluid" />\n                        </div>\n                        <div class="col-md-8">\n                            <div class="card-block px-2">\n                                <h4 class="card-title">${e.nombre}</h4>\n                                <p class="card-text">${e.marca}</p>\n                                <p class="card-text">${e.color}</p>\n                                <p class="card-text">${e.matricula}</p>\n                                <a href="#" class="btn btn-danger delete" _id="${e._id}">X</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card-footer">\n                        ${e.precio}\n                    </div>\n                </div>\n            `,t.appendChild(a)})),console.log(e)}async addNewCar(e){await r.postCars(e),this.clearCarForm(),this.renderCars()}clearCarForm(){document.getElementById("car-form").reset()}renderMessage(e,t,a){const n=document.createElement("div");n.className=`alert alert-${t} message`,n.appendChild(document.createTextNode(e));const r=document.querySelector(".col-md-4"),c=document.querySelector("#car-form");r.insertBefore(n,c),console.log("Render UI"),setTimeout((()=>{document.querySelector(".message").remove()}),a)}async deleteCar(e){await r.deleteCar(e),this.renderCars()}};document.addEventListener("DOMContentLoaded",(()=>{(new c).renderCars()})),document.getElementById("car-form").addEventListener("submit",(e=>{const t=document.getElementById("nombre").value,a=document.getElementById("marca").value,n=document.getElementById("color").value,r=document.getElementById("matricula").value,s=document.getElementById("precio").value,o=document.getElementById("image").files;console.log(o,"Imagen ");const d=new FormData;d.append("image",o[0]),console.log(d.get(o)),d.append("nombre",t),d.append("marca",a),d.append("color",n),d.append("matricula",r),d.append("precio",s);const l=new c;l.addNewCar(d),l.renderMessage("New Car Added","success",3e3),e.preventDefault()})),document.getElementById("carros-cards").addEventListener("click",(e=>{if(e.target.classList.contains("delete")){const t=new c;t.deleteCar(e.target.getAttribute("_id")),t.renderMessage("Car Deleted","danger",3e3)}e.preventDefault()}))})();
//# sourceMappingURL=bundle.js.map