function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./1_00001.png
./1_00002.png
./1_00003.png
./1_00004.png
./1_00005.png
./1_00006.png
./1_00007.png
./1_00008.png
./1_00009.png
./1_00010.png
./1_00011.png
./1_00012.png
./1_00013.png
./1_00014.png
./1_00015.png
./1_00016.png
./1_00017.png
./1_00018.png
./1_00019.png
./1_00020.png
./1_00021.png
./1_00022.png
./1_00023.png
./1_00024.png
./1_00025.png
./1_00026.png
./1_00027.png
./1_00028.png
./1_00029.png
./1_00030.png
./1_00031.png
./1_00032.png
./1_00033.png
./1_00034.png
./1_00035.png
./1_00036.png
./1_00037.png
./1_00038.png
./1_00039.png
./1_00040.png
./1_00041.png
./1_00042.png
./1_00043.png
./1_00044.png
./1_00045.png
./1_00046.png
./1_00047.png
./1_00048.png
./1_00049.png
./1_00050.png
./1_00051.png
./1_00052.png
./1_00053.png
./1_00054.png
./1_00055.png
./1_00056.png
./1_00057.png
./1_00058.png
./1_00059.png
./1_00060.png
./1_00061.png
./1_00062.png
./1_00063.png
./1_00064.png
./1_00065.png
./1_00066.png
./1_00067.png
./1_00068.png
./1_00069.png
./1_00070.png
./1_00071.png
./1_00072.png
./1_00073.png
./1_00074.png
./1_00075.png
./1_00076.png
./1_00077.png
./1_00078.png
./1_00079.png
./1_00080.png
./1_00081.png
./1_00082.png
./1_00083.png
./1_00084.png
./1_00085.png
./1_00086.png
./1_00087.png
./1_00088.png
./1_00089.png
./1_00090.png
./1_00091.png
./1_00092.png
./1_00093.png
./1_00094.png
./1_00095.png
./1_00096.png
./1_00097.png
./1_00098.png
./1_00099.png
./1_00100.png
./1_00101.png
./1_00102.png
./1_00103.png
./1_00104.png
./1_00105.png
./1_00106.png
./1_00107.png
./1_00108.png
./1_00109.png
./1_00110.png
./1_00111.png
./1_00112.png
./1_00113.png
./1_00114.png
./1_00115.png
./1_00116.png
./1_00117.png
./1_00118.png
./1_00119.png
./1_00120.png
./1_00121.png
./1_00122.png
./1_00123.png
./1_00124.png
./1_00125.png
./1_00126.png
./1_00127.png
./1_00128.png
./1_00129.png
./1_00130.png
./1_00131.png
./1_00132.png
./1_00133.png
./1_00134.png
./1_00135.png
./1_00136.png
./1_00137.png
./1_00138.png
./1_00139.png
./1_00140.png
./1_00141.png
./1_00142.png
./1_00143.png
./1_00144.png
./1_00145.png
./1_00146.png
./1_00147.png
./1_00148.png
./1_00149.png
./1_00150.png
./1_00151.png
./1_00152.png
./1_00153.png
./1_00154.png
./1_00155.png
./1_00156.png
./1_00157.png
./1_00158.png
./1_00159.png
./1_00160.png
./1_00161.png
./1_00162.png
./1_00163.png
./1_00164.png
./1_00165.png
./1_00166.png
./1_00167.png
./1_00168.png
./1_00169.png
./1_00170.png
./1_00171.png
./1_00172.png
./1_00173.png
./1_00174.png
./1_00175.png
./1_00176.png
./1_00177.png
./1_00178.png
./1_00179.png
./1_00180.png
./1_00181.png
./1_00182.png
./1_00183.png
./1_00184.png
./1_00185.png
./1_00186.png
./1_00187.png
./1_00188.png
./1_00189.png
./1_00190.png
./1_00191.png
./1_00192.png
./1_00193.png
./1_00194.png
./1_00195.png
./1_00196.png
./1_00197.png
./1_00198.png
./1_00199.png
./1_00200.png
./1_00201.png
./1_00202.png
./1_00203.png
./1_00204.png
./1_00205.png
./1_00206.png
./1_00207.png
./1_00208.png
./1_00209.png
./1_00210.png
./1_00211.png
./1_00212.png
./1_00213.png
./1_00214.png
./1_00215.png
./1_00216.png
./1_00217.png
./1_00218.png
./1_00219.png
./1_00220.png
./1_00221.png
./1_00222.png
./1_00223.png
./1_00224.png
./1_00225.png
./1_00226.png
./1_00227.png
./1_00228.png
./1_00229.png
./1_00230.png
./1_00231.png
./1_00232.png
./1_00233.png
./1_00234.png
./1_00235.png
./1_00236.png
./1_00237.png
./1_00238.png
./1_00239.png
./1_00240.png
./1_00241.png
./1_00242.png
./1_00243.png
./1_00244.png
./1_00245.png
./1_00246.png
./1_00247.png
./1_00248.png
./1_00249.png
./1_00250.png
./1_00251.png
./1_00252.png
./1_00253.png
./1_00254.png
./1_00255.png
./1_00256.png
./1_00257.png
./1_00258.png
./1_00259.png
./1_00260.png
./1_00261.png
./1_00262.png
./1_00263.png
./1_00264.png
./1_00265.png
./1_00266.png
./1_00267.png
./1_00268.png
./1_00269.png
./1_00270.png
./1_00271.png
./1_00272.png
./1_00273.png
./1_00274.png
./1_00275.png
./1_00276.png
./1_00277.png
./1_00278.png
./1_00279.png
./1_00280.png
./1_00281.png
./1_00282.png
./1_00283.png
./1_00284.png
./1_00285.png
./1_00286.png
./1_00287.png
./1_00288.png
./1_00289.png
./1_00290.png
./1_00291.png
./1_00292.png
./1_00293.png
./1_00294.png
./1_00295.png
./1_00296.png
./1_00297.png
./1_00298.png
./1_00299.png
./1_00300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
