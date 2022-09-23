// ******** Cookielerde get set işlemleri ************

// Example 1 - Cookies
function WriteCookie() {
    var now = new Date();
    now.setMonth( now.getMonth() + 1);

    if(document.myform.customer.value == "") {
        alert("Enter Some Data!");
        return;
    }

    cookievalue = escape(document.myform.customer.value) + ";";
    document.cookie = "name=" + " " + cookievalue;
    document.cookie = "expires" +now.toUTCString() + ";";
    document.write("Setting Cookies: " + "name = " + cookievalue);
}  


// ---- Example 2 - Cookies

// Ziyaretçinin adını bir çerez değişkeninde saklayan bir fonksiyon oluşturuyoruz:
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
// Ardından, belirtilen çerezin değerini döndüren bir fonksiyon oluşturuyoruz:
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

/* Çerez Kontrol Etme İşlevi;
   bir çerezin ayarlanıp ayarlanmadığını kontrol eden işlevi oluşturuyoruz. 
   Çerez ayarlanmışsa, bir karşılama mesajı görüntüler. 
   Tanımlama bilgisi ayarlanmazsa, kullanıcının adını soran bir bilgi istemi kutusu görüntüler ve 
   setCookieişlevi çağırarak kullanıcı adı tanımlama bilgisini 365 gün boyunca saklar.
*/
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }

  checkCookie();



// ************ Session Storage ************ 

//SessionStorage name/value çifti ayarlayın ve alın:

//Parameters
// key: Required. The name of a key.
// value: Required. The value of the key.

// ---->> Example 1 - Session Storage

sessionStorage.setItem("name", "Merve");
let personName = sessionStorage.getItem("name");
document.getElementById("demo1").innerHTML = personName;

// >> Remove Data from SessionStorage
// sessionStorage.removeItem("name");


// >> Remove All (Clear session Storage)
// sessionStorage.clear();

// sessionStorage nesnesi, tarayıcıda anahtar/değer çiftlerini saklamamıza izin verir.


// ---->> Example 2 
sessionStorage.setItem("color", "pink");
let color = sessionStorage.getItem("color");
document.getElementById("demo2").innerHTML = color;

