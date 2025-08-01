
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [hasSelected, setHasSelected] = useState(false);
  const [product, setproduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);


  // to fecth the product json file
  useEffect(()=>{
    fetch(("product.json"))
    .then(res => res.json())
    .then((data) => setproduct(data))
    .catch(err => console.error("failed to load json data", err))
  },[])

  // to open the modal according to dynamic product
  const openModal = (key) =>{
    setHasSelected(true);
    setSelectedProduct(key);
    setTimeout(() =>{
      const dialog = document.getElementById('product');
      if(dialog){
        dialog.showModal();
      }
      else{
        console.log("load to fetch");
      }
    })
  }

  // to close the modal
  const closeModal =() =>{
    const dialog = document.getElementById('product');
    if(dialog){
      dialog.close();
      setSelectedProduct(null);
      setShowWelcome(true);

      setTimeout(() => {
        setShowWelcome(false);
        setHasSelected(false);
      }, 1000);
    }
  }

  return (
    <>
    <div className="min-h-screen bg-[#97B3Ae] p-2 flex flex-col items-center justify-center">
      <div>
        {!hasSelected &&  <div className='flex items-center justify-center'>

        <h2 className='items-center text-2xl md:text-4xl font-bold'>What does your body Crave today?</h2>
        <svg  width="70" 
             height="70" 
           className="icon"  viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"><path d="M859.29 140.28c-5.31-15.34-79.28-7-116 9.42s-163.34 116.58-188.52 172-17.35 64.14-30 84.29-17.1 33.3-22.12 27.66-2.24-16.66 7.83-36.5 28-55 32.21-78.58-10.15-111.32-11.56-147.31-15.46-105.8-33.6-106.37-69.25 69.39-75.15 122.11-17.46 139.43 4.21 195.12 34.11 42.14 41.25 66.88-14 82.5-40.95 117.38-37 46.84-48.27 43.18-17-29-9.06-46.76 26.22-37.12 26.48-61.55-9.33-113.22-15.22-136.06S360 291.87 358 272.34s2.85-67.45-10.61-72.41c-23.69-7.57-57.39 50.77-76.1 132.25s6.86 148 15.18 161.37 27.85 46.23 41.65 61.22 25.81 20.89 29.44 46.57 5.44 38.52-9.79 74.66-66.06 149.34-83 166.45c-4.19-42.4 6.47-30.15 7.41-63.57s-3.05-43.81 3-74.05-21.14-139.41-46-168.41c-12.13-15.05-8-53.59-15.32-54.33s-9.44-2.44-13.92 22.33-43 102-34.27 169.44 12.82 73.72 21.86 87.69 21.56 23.3 31.14 50.25 10.82 40.5 20.73 48.44-16.17 92.81-16.17 92.81l28.17 6s24.82-125.4 50.13-137 37.28 17.63 83.27 17.95 103.84-15.91 129.29-26.22 41.21-16.06 66.32-36.4 56.41-67.58 74.87-89.77 31.63-25.58 25.85-33.46-33.3-3.41-61-1.88-114.7 6.52-178.61 29.73-85.12 71.8-96.12 84.38-14.63 27.62-24.49 21.32-4.73-14.71 1.28-23.38 78.23-177 162.4-192.17c40.67-5.8 37.86 24.72 92.36 26s138.9-18.76 202.48-98.5c47.14-59.19 61-113.91 66.63-121s-28.71-13.21-53.39-6.47-35 16.15-58.92 19.32S607 402.11 563.34 443s-47.73 91-66.93 103.09-41.9 25-44.33 17.05 42.39-100.88 78.53-141.68c11.65-13.69 29-5.41 67.11-24.61s144-102.73 174.92-136.36 32.09-58.69 57.77-79.74 30.84-34.75 28.88-40.47z" fill="#1D3557"></path><path d="M207.57 519c-11.4 41.54-7.11 122.14 1.1 161.26s31.48 151.17 31.48 151.17-17-118.18-24.28-165.4-8.3-147.03-8.3-147.03zM322.07 240.56C306.49 289.51 307.36 371 310.53 395s25.7 143.29 39 158.6c-17.27-74.25-28.49-121-33.21-164.41-4.65-43.1-0.32-77.72 5.75-148.63zM641.9 671.54c-33.45 39-103.26 81.1-125.27 91S381.22 816 361.2 812.71c72.25-24.34 117.88-39.36 157.31-58.18 39.09-18.66 66.27-40.53 123.39-82.99zM486 95.61c-10.09 27.71-43.91 204.72-21.09 280.17C450.33 288.82 486 95.61 486 95.61zM792.13 181.21c-39.45 21.42-213.55 167.5-225.74 185.64 33.42-22.3 225.74-185.64 225.74-185.64zM808.82 411.65c-18.6 24.78-170.91 157-273.46 145 159.64-32.19 273.46-145 273.46-145z"
         fill="#FFD166"></path></g></svg>
        </div>
}

{/* The option section where the option will load */}
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-7'>
          {product && Object.keys(product).map((key, idx) => (
            <button key={idx} className="btn btn-soft btn-error" onClick={ () => openModal(key)}> {`${'abcd'[idx]}. ${key}`}</button>
        ))}
    {
          showWelcome && (<div className="toast toast-top toast-end">
  <div className="alert alert-info">
    <span>Welcome Back! Let's do it again</span>
  </div>
</div>)
 }

 {/* the product section. The product will load dynamically after selecting option and it show on modal.  */}
<dialog id="product" className="modal">
  <div className="modal-box">
    {selectedProduct ? (
      <div>
        <img className='w-[200px] h-[200px] mx-auto m-3 rounded-2xl' src={product[selectedProduct].image} alt= {product[selectedProduct].product} />
        <h4 className="font-bold text-center text-lg"> Archetype Name: {product[selectedProduct].archetype}</h4>
        <h4 className="font-bold text-center text-lg"> Product Name: {product[selectedProduct].product}</h4>
        <div className='flex justify-center items-center gap-4'>

        <p className="py-4">{product[selectedProduct].description}</p>
        <button className="btn">
       <div className="badge badge-sm badge-secondary">{product[selectedProduct].fabric}</div>
        </button>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={closeModal}>Start Over</button>
          </form>
        </div>
      </div>
    ) : (
      <div className="modal-action">
        <form method="dialog">
          <button className="btn" onClick={closeModal}>Start Over</button>
        </form>
      </div>
    )}
  </div>
</dialog>
        </div>
      </div>

    </div>
    </>
  );
}

export default App;
