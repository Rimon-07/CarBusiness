const Type =()=>(
    <div className="d-flex justify-content-center align-items-center gap-3">
        <label className="text-center">
            <span className="fw-normal fs-6 text-start filter-search-label">Type</span>

            <select className=" form-select outline-none fw-bold fs-6 filter-search-select" aria-lable="used Card">

                <option selected className="fw-bold fs-6">used Card</option>
                <option className="fw-bold fs-6" value="1">One</option>
                <option className="fw-bold fs-6" value="2">two</option>
                <option className="fw-bold fs-6" value="3">three</option>
                <option className="fw-bold fs-6" value="4">four</option>
            </select>

        </label>

        <div className="vertical-line"/> 
    </div>
);
const Make =()=>(
    <div className="d-flex justify-content-center align-items-center gap-3">
        <label className="text-center">
            <span className="fw-normal fs-6 text-start filter-search-label">Make</span>

            <select className=" form-select outline-none fw-bold fs-6 filter-search-select" aria-lable="Infiniti">

                <option selected className="fw-bold fs-6">Infiniti</option>
                <option className="fw-bold fs-6" value="1">One</option>
                <option className="fw-bold fs-6" value="2">two</option>
                <option className="fw-bold fs-6" value="3">three</option>
                <option className="fw-bold fs-6" value="4">four</option>
            </select>

        </label>

        <div className="vertical-line"/> 
 
    </div>
);

const  Year =()=>(
    <div className="d-flex justify-content-center align-items-center gap-3">
        <label className="text-center">
            <span className="fw-normal fs-6 text-start filter-search-label">Year</span>

            <select className=" form-select outline-none fw-bold fs-6 filter-search-select" aria-lable="Year">

                <option selected className="fw-bold fs-6">Year</option>
                <option className="fw-bold fs-6" value="1">One</option>
                <option className="fw-bold fs-6" value="2">two</option>
                <option className="fw-bold fs-6" value="3">three</option>
                <option className="fw-bold fs-6" value="4">four</option>
            </select>

        </label>

        <div className="vertical-line"/> 
 
    </div>
);


const  Model =()=>(
    <div className="d-flex justify-content-center align-items-center gap-3 ">
        <label className="text-center">
            <span className="fw-normal fs-6 text-start filter-search-label">Model</span>

            <select className=" form-select outline-none fw-bold fs-6 filter-search-select" aria-lable="Model">

                <option selected className="fw-bold fs-6">Model</option>
                <option className="fw-bold fs-6" value="1">One</option>
                <option className="fw-bold fs-6" value="2">two</option>
                <option className="fw-bold fs-6" value="3">three</option>
                <option className="fw-bold fs-6" value="4">four</option>
            </select>

        </label>

        <div className="vertical-line"/> 
 
    </div>
);


 const Price = () =>(

            <label className="text-center">
              <span className="fw-normal fs-6  text-start filter-search-label gap-3">Price</span>

            <select className=" form-select   fw-bold fs-6  filter-search-select" aria-lable="Price">

                <option selected className="fw-bold fs-6 ">Price</option>
                <option className="fw-bold fs-6" value="1">One</option>
                <option className="fw-bold fs-6" value="2">two</option>
                <option className="fw-bold fs-6" value="3">three</option>
                <option className="fw-bold fs-6" value="4">four</option>
            </select>

        </label>
 );


export const FilterAndSearch = () =>{
    return (
        <>
            <section>
                <h1 className="fw-bold text-center filter-search-section-title">Which vehickes you are looking for?</h1>

                <div className="d-flex justify-content-center align-items-center filter-search-box shadow-sm container">

                    <Type />
                    <Make />
                    <Year/>
                    <Model/>
                    <Price/>

                    <button className="btn btn-primary search-button  ms-4">
                    <i class="bi bi-search"></i> Search
                    </button>
                </div>
            </section>
        </>
    );
 };


 


 