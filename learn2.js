//!tür dönüşümleri

let a = 5;
let b = "10";
//stringden number a çevirme

let c = Number(b);
console.log(c);//number şeklinde çıkacaktır bu

let aa = 8;
let bb = parseInt("12");//todo parseint de number gibidir string yazılanı number geri verir
console.log(bb + aa);//? number tipinde gelecektir

let d = 3;
let e = parseFloat("5");
console.log(d + e);//?parsefloat da aynı göre görüyo!
//todo parseint ile parsefloat arasındaki tek fark 12.5 gibi bir sayı girdğimizde float sayının aynısını İnt ise 12 değerini veriyo sadece 


//number dan stirnge çevirme
let f = String(10);
console.log(f);//string şeklinde çıkar
console.log(typeof f);//bu da türnü gösterir işte
let sonuç = String(true);//boolean türünü stringe çevirdik
console.log(sonuç); //"true" çıkacak
console.log(typeof sonuç);//burada da string gelir

let rakamlar = String((1, 2, 3, 4, 5));//object i stringe çevirdik
console.log(rakamlar);//sting  çıkacak
console.log(typeof rakamlar);//burda da string gelir

//!breakpoint ve tooltip 
//?yazarkenki çıkan yazılımcıyı bildiren bilgi kutuculardr=tooltip
//todo alttaki breakpointtir
//debugger;//!yani kodu çalıştırıdğımızda burdan çalışmış oluyor
let xy = 10;
let yx = 15;
let t = 20;
let sonucc = xy + t + yx;
console.log(sonucc);//?2515
//breakpoint eklemek fazla satırlı kodun nerde hata olduğunu bulmak için kullanılır 
//todo adım adım çalıştırmak için  "debugger" ifadesini kullanırız

//!FOR DÖNGÜSÜ

for (let i = 1; i <= 30; i++) {
  //todo for(değişken ;koşul;arttırma-azaltma)
  console.log(i)
}//for döngüsü 1 den 300 e kadar bütün sayıları ekrana yazdırır (koşula ne yazılırsa o yazılır.)

for (let ii = 0; ii <= 50; ii += 2) {
  console.log(ii);//todo 0 dan 50 ye kadra olan sayıların çift olanlarını yazdırır
}

for (let iii = 1; iii <= 51; iii += 2) {
  console.log(iii);//todo 1 den 50 ye kadar olan sayıların tek olanlarını yazdırır.
}

for (let x = 1; x <= 10; x++) {
  if (x % 2 == 1) {//? bölümden kalan 1 ise kamil umut değilse arazz yazdır.
    //todo mesela 7 nin 2 ye bölümden kalan 1 dir o yüzden kamil umut yazar ekranda.
    console.log("kamil umut")
  } else {
    console.log("arazz")
  }
}

//*50 den geriye geriye doğru sayıp hepsinin toplamını alıyor bu program
let toplam = 0;
for (let y = 50; y >= 1; y--) {
  toplam = toplam + y;
  console.log(y);
}
console.log("toplam:" + toplam);

//!while döngüsü

// 1 den 50 ye kadar yazdırma
let sayaç = 1;
while (sayaç <= 50) {

  console.log(sayaç);//todo buraya kadar yazdığımızda sonsuz döngüye girer!!

  sayaç++;//todo bu sayacı (yani=1) 1 arttırı böyle böyle  kaç yazılırsa oraya kadar gider.
}

//todo çift-tek sayıları yazdırma
let sayac=1;
while(sayac <= 10){
if(sayac%2==0){//?0 yerine 1 yazılırsa çiftleri değil tekleri yazdırır yani..
  //todo mesela 2 nin 2 ye bölümünden kalan 0 o yüzden ekrana 2 yazılır. 
  //*ama 3 ün 2 ye bölümünden kalan 1 dir o yüzden 3 ekrana yazılmaz
  console.log(sayac);
}
sayac++;//10 ar arttırır.//todo sonsuz döngülerden her zaman kaçınılması gerekir eğer ben buraya sayac-- yazsaydım sonsuz döngüydü
}

let sayaçç=1;
while(true){
//bu sonsuz döngüdür kitler bilgisayarı valla
console.log(sayaçç);
if(sayaçç==9){
  //? 9 a kadar yazacak 1 den(eğer sayaçç 9 a eşit olursa=yani 9 a kadar yazıp duracak)
  break;//*burada kesme anahtar sözcüğünü kullandık. kullanmazsan sonsuz döngü.kalıp bu
}
sayaçç++;
}

        //! DO-WHİLE DÖNGÜSÜ
//todo koşul kesin 1 kere çalışır.

let r=1
do{
console.log(r);
r++;
}
while(r<=10);

let yaş=20;
do{
console.log("ehliyet alırsınız.")//? en az bir kere bu komut çalışacak. aşağıdaki koşul dogru da olsa yanlış da olsa

}while(yaş>=25);  //?burası doğru yani true ise döngü devam eder ama false ise sadece 1 kere kesin gösterir gider.

//todo while ile do-while ın farkı budur do-while en az 1 kere komutu gösterir.

//* 1 den 20 ye kadar olan tek sayıları yazdıran program do-while
let sayacç=1
let toplamke=0;
do{
if(sayacç%2==1){
  toplamke=toplamke+sayacç;
}
sayacç++;
}while(sayacç<=20);
console.log("toplam :"+ toplam);

//!    ARRAY(DİZİLER)

 //? diziler saymaya 1 den değil 0 dan başlar
let sayılar=[0,1,2,3,4,5,6,7,8];
sayılar[3]=3;
console.log(sayılar[3]);





let isimler = ["enes","kamil","umut","araz"];
isimler[2]="kamil";
console.log(isimler[2]);
console.log(isimler);//?böyle yapıp dizinin ne olduğunu görebiliriz.


let karısıkDizi = [1,"umut",5,7,true,null,undefined]
//todo farklı programlama dillerinde böyle bir sey yoktur
//? javascripte özgü bir özelliktir bu karısık dizi tanımlama özelliği

let sayılarrr = [1,3,8,6,4,,8,9,6];
console.log(sayılarrr[4]);//!sayı değerinin içi köşeli parantez bunu asla unutma yoksa çalışmıyo
console.log(sayılarrr);

let sayaççç=3;
let toplamken=0;
do{
if(sayacç%2==1){
  toplamken=toplamken+sayacç;
}
sayacç++;
}while(sayacç<=20);
console.log("toplam :"+ toplamken);

//! foreach döngüsü == dizilerde kullanılır
let dizi1 = ["enes","kamil","umut","araz"]; //todo böyle yapmak daha iyi
let dizi2 = new Array();


dizi1[0]=10;
dizi2[3]=11;
//* diziler aslında bir opject veri tipidir

let isimler  = ["kamil","umut","umut","araz","emre","adem"];
isimler.forEach(function(isim){
console.log(isim);
});
//* isim olarak bir fonksiyon tanımladık. foreach diğer döngüler gibi yine daire olarak 
//* çizdiği için komple tüm diziyi alt alta yazar

//todo diğer yöntem de for ile olur
for(let i=0; i<isimler.length; i++){
  console.log(isimler[i]);
}
// diziler üzerinde bir döngü oluşturacaksak bunun için foreach tavsiye edilir,
