console.log("index.html")
//?document.write ile cıktı alma yani sitede yazdırma

document.writeln("hello world <br>");//write ın sonundaki ln yeni satıra geçmektir
document.write("kamil umut araz");

//? 2. yol console log ile cıktı alma
console.log("kamil <br>");
console.log("umut <br>");
console.log("araz <br>");
console.log("3878 <br>");
console.log({ name: "kamil", surname: "umut araz" });
// let a=5;
//todo let b=200; ctrl-ö ile her yazdığın yorum satırı olur

// console.log(a+b);

//todo alert ile popup tarzında cıktı alınabilir
alert("merhaba la gardaş bak popup budur");

console.log("f5 tuşuna basmasana lan");

console.log(window.location.port);
console.error("hata oluştu ulan")
var a = 5;//global scope: bu sayı değerine her yerden erişebilirsin
//!bu global scope tur (kıvırcık parantezin içinde olmaz)
//todo ama function scope ve block scope illaki {} içinde olacak!!!

if (true) {
  console.log(a);
}
function method() {//function scope
  var sayi = 10;
  console.log(sayi);//!bunlar function scope tur
  if (true) {
    var a = 5;//!bu block scope tur
  }
  while (true) {

  }
  for (let i = 0; i <= 10; i++) {

  }
}
//global scope da bu sayıya her yerden erişilebilir ama 
//function scope da sadece { } içinde erişilebilir..
//todo var-let-const
let sayı = 10;
//var-let-constb degişken ismi = değşken değeri
function selamVer() {
  var selam = "herkese selam"; //?bu bir function scope tur.

  console.log(selam)
  if (true)
    var z = 1000; //burda var yerine let yazsaydım console log {} dışında olduğu için istedğimiz olmazdı.. 
  console.log(z);
}
selamVer();
//todo var = herşseyde function scope olur!!
//! var = block scope olarak da kullanılsa her zaman function scope olarak tanımlar.Bu istisnadır..
//todo let ve const block scope özelliğine sahiptir.
// let block scopetur ve console log her zaman {} içine gelmek zorundadır.
//! burada let için yazdklarım const için de geçerli

//const ile let arasındaki fark nedir?

// const(constant): sabit 
const b = 10;
//! burada const sabit anlamında olduğu için const değişmez yani sonuç 10 çıkar.
console.log(b);

a = 17;     //! burada let ile yazdığımız kod değişir yani sonuç 17 çıkar.
console.log(a)

const user = {
  username: "kamilumut",
  password: "1234567889909"
}
console.log(user)

var sayi1 = 10;
var sayi2 = 20;
var sayi3 = sayi1 + sayi2;

//?veri tipleri
//!string
let isim = "kamil umut araz 19 yaşında."; //*çift tırnak içinde olan her şey string veri tipidir(harf içeren).
console.log(isim);
console.log(typeof isim); //typeof: isim teriminin hamgi veri tipinde olduğunu söyler
//!harfler string tipinde sayılar number tipinde tanımlanır
//?tırnak içinde olan her şey string turnaksız olan her şey number yani harf sayı farketmez
//!number 

let numara1 = 10; //eğer tırnaksız ve sayı geçiyorsa bu number tipindedir
console.log(numara1);
console.log(typeof numara1);

//!boolean : true ve falseden oluşur yani evet ve hayır dan oluşur
console.log(5 < 2); //? bu false dir. bunun tek işlevi budur
let y = 3;
let x = 12;
let sonuç = x + y;
console.log(sonuç > 10) //! bunun sonucu ise true çıkar boelean veri tipi sadece budur..

//!null veri tipi : boş anlamındadır
let c = null;
a = 27; //böyle dersek 27 sayısını atamış oluyoruz ve sonuç 27 çıkar.
console.log(a)  //*boş göunecektir yani null yazacaktır

//!undefined: tanımlanmamış olarak geçer
let ö;
console.log(typeof a); //*sonuç olarak undefined yazar çünkü a=bir sayı yazmamışız

//!object: kıvırcık parantezlerin içinde birçok özellik eklenebilir
let insan = {
  isim: "Kamil Umut",
  soyisim: "Araz",
  yaş: 23
}
console.log(insan);
console.log(typeof insan) //object olarak cıkacaktır sonuç
//*insan burda opject dir console log ile insan yazdırılırsa görünecektir

//!function: fonksiyon tanımlamadır
let func = function () {
  console.log("merhaba ben kamil umut")
}
func(); //merhaba ben kamil umut yazacaktır
console.log(typeof func); //function yazacaktır.
// hesap makinası yapalım
var sayi2 = 20;
var sayi3 = sayi1 + sayi2;

let hesapMakinası = {
  sayı1: 10,
  sayı2: 40,
  toplam: function () {
    return this.sayı1 + this.sayı2;
  }
}

console.log(hesapMakinası.toplam()); //50 yazacaktır
let kullaniciSayi1 = prompt("İlk sayıyı giriniz:");
let kullaniciSayi2 = prompt("İkinci sayıyı giriniz:");

let toplam = parseInt(kullaniciSayi1) + parseInt(kullaniciSayi2);

alert("Toplam: " + toplam);
console.log(eval('2+2'));
console.log(eval(new String('2+2')));
console.log(eval('2+2') === eval('4'));
console.log(eval('2+2') === eval(new String('2+2')));
console.log(eval('5678+578') === eval(new String('5746+6375')));

//!isFinite()
//todo İşlev isFinite(), gerekiyorsa önce değeri bir sayıya dönüştürür.
//todo NaNSonlu bir sayı, ± olmayan bir sayıdır Infinity. Fonksiyonun içindeki zorlama şaşırtıcıisFinite() olabileceğinden , kullanmayı tercih edebilirsiniz
function div(x) {
  if (isFinite(1000 / x)) {
    return "number is not infinity";
  }
  return "number is infinity"
}
console.log(div(0)); // number is infinity olarak çıkar
console.log(div(1));//number is not infinity olarak çıkar

//!isNaN()
//todo İşlev , gerekirse önce değeri bir sayıya dönüştürerek bir değerin isNaN()olup olmadığını belirler . NaNFonksiyonun içindeki zorlama şaşırtıcıisNaN() olabileceğinden , kullanmayı tercih edebilirsiniz
function umut(x) {
  if (isNaN(x)) {
    return 'Not a Number!';
  }
  else
    return x * 1000; //?aşşada girilen sayıyı 1000 ile çarpar yani
}
console.log(umut('100F')); //?harf sonuna gelmiş ve bunun outputu not a number işte
console.log(umut('0.0314E+2'));//?burda sayı ve işlemler olduğu için sonuç olarak çıkar yani..

//!parseFloat()
//todo İşlev parseFloat(), bir dize bağımsız değişkenini ayrıştırır ve kayan noktalı bir sayı döndürür.
function kamil(r) {
  return parseFloat(r) * 2.0 * Math.PI; //?girilen sayı(nerde sayı varsa amk) direkt 2 ile işte
}

console.log(kamil(4.5895667));
console.log(kamil('4.8577abcdefgh'));//?harflerin içindeki sayılari çarpılır işte
console.log(kamil('abcdejhffgh'));//?burda hiç sayı yok o yüzden bunun outputu nan

//!parseint
//todo bir dize bağımsız değişkenini ayrıştırır ve belirtilen sayı tabanının (matematiksel sayı sistemlerindeki taban) bir tamsayısını döndürür.
console.log(parseInt('2341'));
//sayılar ne ise o çıkar yani parantez içine ne yazdıysan o çıkar
console.log(parseInt(4567890));


//!encodeURI
//İşlev, belirli karakterlerin her örneğini , karakterin UTF-8 kodlamasını temsil eden bir, iki, üç veya dört kaçış dizisiyle değiştirerek bir URI'yiencodeURI() kodlar (iki yedek karakterden oluşan karakterler için yalnızca dört kaçış dizisi olacaktır). ile karşılaştırıldığında , bu işlev daha az sayıda karakteri kodlayarak URI sözdiziminin parçası olanları korur.
const uri = 'https://devdocs.io/javascript/global_objects/encodeuri';
const encoded = encodeURI(uri)
//!globalthis
try {
  console.log(decodeURI(encoded));
} catch (e) {
  console.error(e);
}
//!decodeURIComponent
//daha önce benzer bir rutin tarafından oluşturulan Tekdüzen Kaynak Tanımlayıcısı (URI) bileşeninin kodunu çözer encodeURIComponent().
function containsEncodedComponents(x) {
  return decodeURI(x) !== decodeURIComponent(x);
}
console.log(containsEncodedComponents('%3Fx%3Dtest'));
console.log(containsEncodedComponents('%D1%88%D0%B5%D0%BB%D0%BB%D1%8B'));

console.log(encodeURIComponent("http://example.com")); // prints "http%3A%2F%2Fexample.com"
console.log(encodeURIComponent("foo@bar.com")); // prints "foo%40bar.com"
console.log(encodeURIComponent("https://www.google.com/search?q=test%20value")); // prints "https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dtest%2520value"


function canMakeHTTPRequest() {
  return typeof globalThis.XMLHttpRequest === 'function';
}

console.log(canMakeHTTPRequest());

//todo string ile number toplanmaz birlesştirilir

//!aritmetik operatörler
//!toplama/çıkarma işlemi +-
let not1 = 60;
let not2 = 70;

let sayı1 = "5";
let sayı2 = 10;
console.log(not1 + not2);
console.log("notlarınızın toplamı:" + (not1 + not2));
//todo ü,ö,ş,ğ gibi türkçe karakterler içeren kelime ve harfler kullanılmaz!!!

//!çarpma işlemi *
let deisken = 5;
let deisken1 = 10;
console.log(sayı1 * sayı2);

//!bölme işlemi /
let degişken1 = 10;
let degişken2 = 2;

let sonucc = (degişken1 + degişken2) / 2

//!mod alma operatörü %
//birşeyin bölümünden kalanı verir
console.log(10 % 3)//sonuc 1 çıkacaktır
console.log(12 % 6)//sonuc 0 çıkacaktır

//! ++ : 1 arttırmak için kullanılır
let admin = 10;
admin++//11 çıkacaktır
admin++//12 çıkacaktır
admin--//11 çıkacaktır
admin--//10 çıkacaktır
console.log(a);

//** : üssü alma ifadesidir
console.log(2 ** 3)//sonuç 8 çıkacaktır
console.log(4 ** 2)//?16 çıkacaktır

//!atama operatörleri

let d = 5;//a 5 e eşittir

// == : 5 bu da eşittir
console.log(5 == 4)//5 4 e eşit olmadığı için false sonucu verir
console.log(5 == 5)//5 5 e eşit oludğu için true sonucu çıkar
let l = 5;
let r = 5;
let cıktı = l + r;
console.log(cıktı == 11);//5+5 11 e eşit olmadığı için false sonucunu alırız
console.log(cıktı == 10);// 10 a eşit olduğu için true sonucunu alırız

console.log(5 == "5")//number tipinde olan 5 ile string tipinde olan 5 eşittir olarak alıp true sonucunu veririz

//todo=== hem veri tiplerine hem de değerlerin eşit olup olmadığına bakar

console.log(5 === 5) //number tipindeki 5 ile yine number tipindeki 5 eşit olduğu için true sonucunu alırız
console.log(5 === '5')//?number tipindeki 5 ile yine string tipindeki '5' eşit olmadığı için false sonucunu alırız

//+= operatörü

let s = 4;
s = s + 2;
console.log(s);//?il sayımız 4. s=s+2 dedik ve sayımız 6 oldu. çıktı olarak 6 sonucunu alıcaz
//todo bu işlem diğer 4 işlem içinde geçerlidir
let z = 3;
z = z * 2;
console.log(z);//todo ilk sayımız 3. 3çarpı2=6 ve sayımız 6 olarak çıktı verir
let p = 20;
p = p / 2;
console.log(p)//todo sonuç 10 olarak çıkar
let k = 10;
k = k - 2;
console.log(k)//todo 8 olarak çıkar
let ze = 45;
ze = ze % 7;
console.log(ze);//todo 45 in yüzde 7 si alınır.
let ka = 34;
let um = 35;
let çıktı = ka + um;
console.log(çıktı === 69);
console.log(çıktı === 27);

sayii = 5;
sayii = sayii * 5;
console.log(sayii);

//!mantıksal operatörler

//? &&=ve operatörü
//* bir tane bile false varsa sonuç false tur.
let yaş = 20;
let para = 3500;
let sağlık = false; //* bu true olasaydı sonuç true olarak çıkacaktı.
console.log(yaş > 18 && para > 3000 && sağlık == true)//todo yaş ile para tutuyor ama sağlık tutmadığı için false olarak sonuç çıkar

//? ||=veya operatörü
//* bir tane bile true varsa sonuç true çıkar
//todo kaç false olursa olsun bir tane true varsa sonuç true
let yas = 19;
let paraaa = 5000; //todo bunu aşağıda da kullandım
let sağlıkk = false;  //* aşağıda veya=|| yerlerine ve=&& gelseydi sonuç false olcaktı 
console.log(yas > 18 || paraaa > 3000 || sağlıkk == true)//sonuç true çıkar sağlığın false olması etki etmez çünkü adı üstünde "veya".

//? !=değil operatörü
//sonuç ne çıkacaksa tam tersi çıkarır
console.log(!(paraaa === 350)) //*yukarıdaki paraaa maddesi
//todo normalde false olması lazım çunkü paramız 350 liradan büyük ama değil operatörü koyunca false olan sonuç true olur.

//!Karşılaştırma operatörleri

//? (!=)=eşit değil operatörü

let yaşşş = 25;
console.log(yaşşş != 20); //25=20 ifadesi yanlış olduğundan operatörümüz de eşit değil olduğundan sonuç true olur

// (<) ve (>) operatörleri
console.log(15 < 24); //todo sonuç true çıkar 
console.log(15 > 16); //todo sonuç false çıkar

//? (<=) ve (>=) operatörleri
console.log(15 <= 15); //todo sonuç true çıkar
console.log(15 >= 15); //todo sonuç true çıkar
console.log(15 <= 16); //todo sonuç true çıkar
console.log(15 >= 16); //todo sonuç false çıkar

//!diyalog kutuları
//? alert
alert("selam alükümmmm");//popup tarzı yukardan aşşa inen uyarılardır zaten gördük

//! prompt
let isimmm = prompt("isminizi yazın : ");//*yine popup şeklinde isim veya değer girmek için kullanılan fonksiyondur
let yaşş = prompt("yaşınızı girin : ");
//todo bu let = isiimm ise popup a yazdığımız şeyi console a çıkarmamızı sağlıcak işte 
console.log(isimmm);
document.writeln(isimmm);//* bu ise console a değil direkt ekrana yazdırır.
//todo kullanıcıdan hangi değer alınırsa alınsın sonuç consola veya ekrana string tipi ile çıkar
//?nasıl mı?
console.log(typeof isimmm);
console.log(typeof yaşş);//todo yukarıdaki değerler (typeof hangi türde yazıldığını gösterir bunları görmüştük)

//! confirm=onaylama kutusu 
let sonuccc = confirm("silmek istediğinize emin misiniz?")
console.log(sonuccc)//todo eğer tamam a basılırsa consolda true olarak, iptale basılırsa sonuç false olarak çıkar

//!koşul yapıları

let not = 65;
if (not > 50) {
  console.log("sınıfı geçtiniz, notunuz:" + not);
}//todo notum 65 ve 50 den büyük olduğu için sınıfı geçtiniz sonucu çıkacaktır.
else {
  console.log("sınıfı geçemediniz, notunuz:" + not);
}//todo burada if komutu çalıştı


if (not < 50) {
  console.log("sınıfta kaldınız, notunuz:" + not);
}//todo yine 50 den büyük olduğu için sınıfı gectiniz yazar
else {
  console.log("sınıfı geçtiniz, notunuz:" + not);
}//todo eğer notum 50 den küçük olsaydı sınıfta kaldınız olcaktı sonuç
//todo burada ise else komutu çalıştı. Tek fark bu
let nott = prompt("notunuzu girin : ");
if (nott > 70) {
  console.log("harika bir notunuz var , notunuz: " + nott);
}
else {
  console.log("bu not düşük , notunuz: " + nott);
}//todo burada ise kullanıcıdan notunu isteyip kalıp veya geçtiğini görmesini sağladık

//! yaşıma göre ehliyet alabilir miyim uygulaması

let yaşamyılı = prompt("yaşınızı giriniz:");
if (yaşamyılı > 18) {
  alert("ehliyet alma yaşına sahipsiniz!!, yaşınız:" + yaşamyılı);
}
else {
  alert("maalesef ehliyet alma yaşına sahip değilsiniz, yaşınız:" + yaşamyılı);
}

//!ders ortalaması bulma programı 
let vize1 = Number(prompt("vize1 notunuzu giriniz:"));
let vize2 = Number(prompt("vize2 notunuzu giriniz:"));
let final = Number(prompt("final notunuzu giriniz:"));
let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);
//todo vize1 ve vize2 notunun %30 u yani çarpı 0.3  finalin ise %40 ı yani çarpı 0.4  alınan bir program
if (ortalama > 50) {
  alert("Sınıfı Geçtiniz!!!, Ortalamanız:" + ortalama);
}
else {
  alert("Sınıfta Kaldınız, Ortalamanız:" + ortalama);
}

//! else if kullanımı
//todo sadece else ve if kullanırken iki şart kullanırken bunda çoklu şart kullanılabilir

let osmanavcı = (prompt("osman avcıyı girin"));
let ebcee = (prompt("ebcee yi girin"));
if (osmanavcı > ebcee) {
  alert("osmanavcı ebcee den büyük");
}
else if (osmanavcı > 40) {
  alert("osmanavcı 30 da kaldı");
}
else if (ebcee === 40) {
  alert("ebceee 40 yapar ve mhp 40 yaşındaaa!!");
}
else {
  alert("hepsi bok yisin");
}

//!yol ayrımı uygulaması
// todo kullanıcı 3 yolun herhangi birini seçtiğinde, seçtiğiniz yol ... . yoldur dşye bir ifade ile karşılaşılan program
let seçilenyol = prompt("lütfen gitmek istediğiniz yolu seçiniz");
if (seçilenyol == 1) {
  console.log("seçilen yol" + seçilenyol + ". yoldur");
}
else if (seçilenyol == 2) {
  console.log("seçilen yol" + seçilenyol + ". yoldur");
}
else if (seçilenyol == 3) {
  console.log("seçilen yol" + seçilenyol + ". yoldur");
}
else {
  console.log("bilinmeyen yol numarası girdiniz");
}

//! isim ve tckn girmemizi sağlayan program 
let isimmmm = prompt("isminizi giriniz");
let tckn = prompt("tcknizi giriniz");
kontrolet(isimmmm, tckn);
function kontrolet(isimmmm, tckn) {
  if (isimmmm == "kamil")
  //todo burda da aşağıdaki ile aynı mantık popup yerine kamil girilirse doğrudur ama farklı bişi girlirse yanlış çıktısı alırız. 
  {
    if (tckn.lenght == 11)
    //todo lenght uzunluk demektir. yani girilen şeyin kac haneli olacağına karar verir tckn 11 hanel, olduğu için ben 11 verdim.
    {
      alert("TCKN ve isim doğrudur");
    } else {
      alert("lütfen tckn nizi doğru bir şekilde giriniz");
    }
  }
  else {
    console.log("lütfen isim alanını boş bırakmayınız");
  }
}
//!beden kitle endeksi ölçen program
let boy = Number(prompt("boyunuzu M cinsinden giriniz"));
let kilo = Number(prompt("kilonuzu giriniz"));
let sonuçç = kilo / (boy * 2)
//todo boyun karesini alıp (yani 2 ile çarpıp) kiloya bölüyoruz..
if (sonuçç <= 18, 5) {
  console.log("ideal kilonun altındasınız!! endeksiniz:" + sonuçç);
}
else if (sonuçç >= 18.5 && sonuçç <= 24.9) {
  console.log("ideal kilodasınız.. endeksiniz:" + sonuçç)
}
else if (sonuçç >= 25 && sonuçç <= 29.9) {
  console.log("ideal kilonun üstündesiniz! endeksiniz:" + sonuçç);
}
else if (sonuçç >= 40) {
  console.logt("OBEZSİNİZ ŞİŞKOSUNUZ! endeksiniz:" + sonuçç);
}
else {
  console.log("ebesinin bişeyi gari endeksiniz:" + sonuçç);
}
//!benzin istasyonu programı
let dizel = 24.53, benzin = 22.25, lpg = 11.1;;
const yakıtmetni = "1-dizel 2-benzin 3-lpg (yakıt türünü seçiniz)";
let yakıttipi = prompt(yakıtmetni);
let yakıtlitresi = Number(prompt("yakıt litresini giriniz"))
let bakiye = Number(prompt("bakiyenizi giriniz"))


if (yakıttipi == 1) {
  let tutar = dizel * yakıtlitresi
  if (tutar < bakiye) {
    //bakiyeniz yeterli direkt ode
    console.log("yakıt alındı!")
  } else {
    console.log("bakiyeniz yetersizdir!!")
  }
}
else if (yakıttipi == 2) {
  let tutarb = benzin * yakıtlitresi
  if (tutarb < bakiye) {
    console.log("yakıt alındı")
  } else {
    console.log("bakiyeniz yetersizdir!!")
  }
}
else if (yakıttipi == 3) {
  let tutarl = lpg * yakıtlitresi
  if (tutarl < bakiye) {
    console.log("yakıt alındı")
  } else {
    console.log("bakiyeniz yetersizdir!!")
  }
}

//!ALERT SİTEDE YUKARDAN POPUP VEREN ELEMENTTİR ALERT OLANLARI CONSOLE.LOG OLANLARLA DEĞİŞTİRDİM KAFAN KARIŞMASIN!!

//!switch case
//? if else nin alternatifi gibi düşün
let sayıı = prompt("lutfen 1 ile 5 arasında sayı giriniz");

switch (sayıı) {
  case "1":
    console.log("girilen sayı 1 dir");
    break;

  case "2":
    console.log("girilen sayı 2 dir");
    break;

  case "3":
    console.log("girilen sayı 3 tür");
    break;

  case "4":
    console.log("girilen sayı 4 tür");

  case "5":
    console.log("girilen sayı 5 tir")
    break;

  default:
    console.log("lütfen geçerli bir sayı giriniz!")
    break;
}

//! 2. örnek
let metin = "1-2-3-4-5-6-7 : lütfen bir seçim yapınız"
let değer = prompt(metin);
switch (değer) {
  case "1":
    console.log("pazartesi");
    break;

  case "2":
    console.log("salı")
    break;

  case "3":
    console.log("çarşamba")
    break;

  case "4":
    console.log("perşmebe")
    break;

  case "5":
    console.log("cuma")
    break;

  case "6":
    console.log("cumartesi")
    break;

  case "7":
    console.log("pazar")
    break;

  default:
    console.log("haftada 7 gün var gardeş")
    break;
}

//!atm uygulaması programı
let yenisatırr = "\r\n"
// \r\n elemnti yeni satıra geçiren elemnttir.
let kredisınırı = 100000;
let atmbakiye = 1000;
let yatırmasınırı = 10000
let atmmetin = "1-bakiye görüntüleme" + yenisatırr
  + "2-para çekme" + yenisatırr
  + "3-para yatırma" + yenisatırr
  + "4-kredi çekme" + yenisatırr
  + "5-çıkış" + yenisatırr
  + "ZİRAAT BANKASINA HOŞGELDİNİZ!!" + yenisatırr
  + "lütfen yapmak istediğiniz işlemi seçiniz"

let seçimm = prompt(atmmetin);
switch (seçimm) {
  case "1":
    alert("bakiyeniz : " + atmbakiye);
    break;

  case "2":
    let çekilecektutar = Number(prompt("çekmek istediğiniz tutarı giriniz"))
    if (çekilecektutar < atmbakiye) {
      atmbakiye = atmbakiye - çekilecektutar;
      alert("para çekme işleminiz başarıyla gerçekleşmiştir. kalan bakiye:" + atmbakiye)
    } else {
      alert("yetersiz bakiye!!" + yenisatırr
        + "bakiyeniz:" + atmbakiye + " " + "çekilecek tutar:" + çekilecektutar);
    }
    break;

  case "3":
    let yatırılacaktutar = Number(prompt("lütfen yatırmak istediğiniz tutarı giriniz"))
    if (yatırılacaktutar > yatırmasınırı) {
      alert("yatırılan tutar çok büyük! günlük yatırma sınırı:" + yatırmasınırı)

    } else {
      alert("başarıyla yatırılmıştır")
    }
    atmbakiye = atmbakiye + yatırılacaktutar;
    alert("başarıyla yatırılmıştır! güncel bakiyeniz:" + atmbakiye);
    break;

  case "4":
    let çekilecekkredi = Number(prompt("lütfen çekmek istediğiniz kredi miktarını giriniz"));
    if (çekilecekkredi > kredisınırı) {
      alert("bankamızın şuanda kredi sınırının 100000 lira olduğundan bu işlemi gerçekleştiremiyor,lütfen daha düşük bir miktar talep ediniz");
    }
    else {
      alert("krediniz çekilmiştir!! çekilen tutar :" + çekilecekkredi + "güzel günlerde harcamanız dileğiyle.");
    }
    break;

  case "5":
    alert("başarıyla çıkış işleminiz gerçekleşti")
    break;


  default:
    alert("lütfen geçerli bir işlem seçiniz")
    break;
}

//!break-continue
//?break
//todo break kullandığımızda o sayıya geldiğinde üstte olan hiçbir sayıyı yazmaz
let sayaçç = 10;
while (sayaçç <= 10) {
  console.log(sayaçç);
  if (sayaçç == 8) {
    break;
  }
  sayaçç++;
}
//?contunie     
//todo continue break gibi hespsini kırmaz; sadece hangı sayıyı kırmak istersek onu kırar
while (sayaçç <= 10) {
  sayaçç++;
  console.log(sayaçç);
  if (sayaçç == 9) {
    continue;
  }
  console.log(sayaçç);
}

//!çarpım tablosu programı
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + "x" + j + "=" + (i * j));
  }
  console.log("----------------------------------");
}

//!asal sayı bulma programı

//todo math.floor buçuklu bir sayı girildiğinde onu tam sayıya yuvarlar


let sayıseç = Number(prompt("lütfen sorgulamak istediğiniz sayıyı giriniz"));
let sonuc = true
for (let s = 2; s <= Math.floor(sayıseç / 2); s++) {
  if (sayıseç % s == 0) {
    //eğer seçtiğimiz sayı 1 le 10 arasındaki tüm sayılardan birine bölümünden kalan 0 sa sayı asal değildir!!
    alert(sayıseç + " sayısı asal değildir");
    sonuc = false;
  } else {
    alert(sayıseç + " sayısı asaldır");
    break;
  }
}

//!  (x!=?) faktoriyel hesaplama programı

let faksayı = Number(prompt("lütfen faktoriyelini hesaplamak istediğiniz sayıyı giriniz"));
//yani sayı 5 girilirse 5*4*3*2*1 şeklinde çarpıyo
let çarpım = 1;
for (let d = 1; d <= faksayı; d++) {
  çarpım = çarpım * d;
  //todo d değişkenimiz seçtiğimiz sayıya kadar yükselip sonra durur.
}
alert("sonuç:" + çarpım);

function yazdır(isim,soyisim){
  console.log(isim + " " + soyisim);
}
yazdır("kamil umut","araz");
yazdır("kerim","şentürk");


//!    ARRAY(DİZİLER)
let bizimGrup=["umut","kamil","araz"];

//TODO sadece string olarak girilmez istenilen veri türünde girilebilir

let bizimgrup2=[1,true,"ahmet",'?',null,5.12]//*görüldüğü üzre her veri tipinde koyabiliyoruz.
 //? diziler saymaya 1 den değil 0 dan başlar
let sayılarrr=[1,2,3,4,5,6,7,8];
console.log(sayılarrr(4));

//! dizi metodları oluşturma
let arabalar=["bmw","toyota","mercedes","reno"];
console.log(arabalar.lenght)
arabalar.push("opel"); //todo push dizinin sonuna girilen şeyi ekler(opel)
console.log(arabalar);

arabalar.unshift("hyundai");//todo unshift ise dizinin başına ekler 
console.log(arabalar.lenght);

arabalar.pop();//todo sondan eleman siler 
console.log(arabalar);

arabalar.shift();//todo baştan eleman siler
console.log(arabalar);

arabalar.splice(0,0,"kamil"); //todo splice metodu hem baştan eleman siler hem de başa eleman ekler. hiçbirşey silmeyip eleman eklmek istersek 0,0 yazılır
console.log(arabalar);

arabalar.splice(2,0,"umut"); //todo mesela her hangi bir elemean silmeden 2. indexin olduğu yere umut u ekle deriz.(2,0,"umut") 2. yazdığımız 0 olan yer silme yeri.
//? unshift sadece başa eleman ekler. splice ise istenilen yere ayrıca siler de 
console.log(arabalar);



