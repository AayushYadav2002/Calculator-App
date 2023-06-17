import Calculator from "./Components/Calculator";
import Footer from "./Components/Header";


function App() {
  return (
    <div className="h-screen p-10 md:p-20" >
      <div className="h-full rounded-xl shadow-2xl md:flex-row  flex  flex-col md:space-x-40  items-center justify-center bg-slate-100">
        
          <Footer/>
       
        <div className="h-full w-3/4 bg-slate-200 rounded-r-3xl">
        <Calculator/>
        </div>
        </div>
    </div>
  );
}

export default App;
