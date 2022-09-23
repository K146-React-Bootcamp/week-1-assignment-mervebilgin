## week-1-assignment

Cookie ve Session Storage ile set ve get işlemleri nasıl yapılır ? 

script.js dosyası içerisinde örneklerle açıklayınız.

#### Cookie Nedir?

Forumlarda gezinirken, sosyal medya platformlarında sohbet ederken veya internette herhangi bir konu hakkında araştırma yaparken cookies yani çerezler karşınıza çıkabilir. Gezindiğiniz internet sayfalarında karşınıza çıkan çerezler, siz ''kabul et'' seçeneğine ya da ''daha fazla bilgi al'' butonuna tıklayana kadar yok olmaz. Çerezlerin işlevleri genelde kullanıcı deneyimini iyileştirmeye yöneliktir.

####

İnternette gezinirken ziyaret ettiğiniz web sayfaları, bilgisayarınıza ve telefonunuza küçük bilgi dosyaları kaydeder. Bu dosyalar telefon veya bilgisayarınızın hafızasında saklanır. Daha sonra aynı siteleri ziyaret ettiğinizde bu kayıtlı bilgi dosyaları sayesinde siteler sizi tanıyabilir. Çerezlerin işlevleri genelde bu yöndedir. Bilgileriniz bu dosyalara yazıldığından dolayı tekrar aynı web sayfalarını ziyaret ettiğinizde bilgilerinizi yeniden girmeye gerek duymazsınız. İşte bu kayıtlı bilgi dosyalarına cookie denir. Türkçede karşılığı ise çerez olarak adlandırılır. Çerezlerin işlevleri, kullanıcıyı web sitesine hatırlatmaktır. Çerezlerin işlevleri doğru kullanıldığında kullanıcı deneyimi kaliteli hale gelir.


##### Çerezler Nerelerde Kullanılır?
Çerezlerin işlevleri arasında birçok özellik sayılabilir. Üye olduğumuz sitelerde kullanıcı adı ve şifrelerimizi ''Beni Hatırla'' butonuyla kaydettiğimizde çerezler devreye girer. Bunun yanı sıra e-ticaret sitelerinde ve daha önceki aramalarımıza göre reklam gösteriminde de kullanılır.


#### Session Storage?
Bir web tarayıcısında key/value değerlerini yalnızca bir oturum süresi için tarayıcıya kaydedebilmesine izin veren bir özelliktir. Yani tarayıcı sekmesi kapatıldığında veriler de kaybolur

##### Local Storage Nedir?
JavaScript sitelerinin ve uygulamalarının son kullanma tarihi olmadan, bir web tarayıcısında key/value değerlerinin kaydedebilmesine izin veren bir özelliktir.

Yukarıdaki tanımlarda da gördüğümüz gibi iki mekanizma da depolama alanı sağlar. Aralarındaki en büyük fark ise session storage yalnızca tarayıcı açıkken (sayfa yeniden yüklendiğindeki veya geri yüklendiğindeki durumlar dahil olmak üzere) bir depolama alanı sağlarken local storage tarayıcı kapatıldıktan sonra da verileri depolamaya devam eder.

Session storage kullanıcının tek bir işlem gerçekleştirdiği, ancak aynı anda farklı pencerelerde birden çok işlem gerçekleştirebileceği senaryolar için tasarlanmıştır. Bu penceredeyken açılan aynı siteye ait birçok sayfada erişilebilirdir ve pencere kapattıldığında ise kendini temizler. Bu sayede üçüncü tarafların verilere erişmesi de zorlaşır.

###### Session storage ve local storage 5 temel methoda sahiptir. Bunlar;
- setItem()
- getItem()
- removeItem()
- key()
- clear()
methodlarıdır.

###### _setItem()_:
Bu method local storage ve session storage için veri eklerken kullanılır. İçerisine parametre olarak önce “key” sonra da “value” değerlerini alır.

```
localStorage.setItem('key', 'value');
localStorage.setItem('name', 'John');

sessionStorage.setItem('key', 'value');
sessionStorage.setItem('name', 'John');
```

###### _getItem()_:
Bu method local storage ve session storage için value değerine erişilirken kullanılır. İçerisine parametre olarak “key” değerini alır ve “value” return eder. Eğer yazılan key değerinin bir karşılığı yoksa null return eder.

```
localStorage.getItem('key');
localStorage.getItem('name');  output: John

sessionStorage.getItem('key');
sessionStorage.getItem('lastname');  output: null
```

###### _key()_:
Bu method local storage ve session storage için seçilen indexteki “key” değerini bize return eder. İçerisine parametre olarak sayı alır.

```
localStorage.key(i);
localStorage.key(0);    output: "name"

sessionStorage.key(i);
sessionStorage.key(0);   output: "name"
```

###### _removeItem()_:
Bu method local storage ve session storage içerisinde seçilen verileri silerken kullanılır. İçerisine parametre olarak “key” değerini alır.

```
localStorage.removeItem('key');
localStorage.removeItem('name'); 
localStorage.getItem('name');     output: null

sessionStorage.removeItem('key');
sessionStorage.removeItem('name');
sessionStorage.getItem('lastname');  output: null

```



###### _clear()_: 
Bu method çağırıldığında local storage ve session storage içerisindeki tüm veriyi temizler.

```
localStorage.clear();
```



