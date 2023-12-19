const allphone = () => {
    document.getElementById("spinner").style.display = "block";
    const searchInput = document.getElementById("search-input").value;
    document.getElementById("search-input").value = "";
    // console.log(searchInput);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInput}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if(data.data == false){
            alert("Oops your type is worn Please try again"); 
        } else {
            showPhoneDetails(data.data);
            document.getElementById("spinner").style.display = "none";
        }
    });


};

const showPhoneDetails = datas => {
    for(const data of datas){
        const parent = document.getElementById('show-result');
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 text-center">
        <img class="w-75 mx-auto" src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">${data.phone_name}</h2>
          <h3 class="card-text">${data.brand}</h3>
        </div>
        <div class="allbutton">
        <button onclick="phoneDetails('${data.slug}')" class="btn mb-3 btn-success">Details</button>
         </div>
        </div>
        `;
        parent.appendChild(div);

    }
};

const phoneDetails = id => {
        const url = `https://openapi.programming-hero.com/api/phone/${id}`;
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setPhoneDetails(data.data));
    };


const setPhoneDetails = details => {
    console.log(details);
    const phoneDetail = document.getElementById('phone-detail');
    phoneDetail.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
            <img class="w-25 mx-auto" src="${details.image}" class="card-img-top" alt="...">
            <div class="card-body mx-auto">
              <h3 class="card-title">Name: ${details.name}</h3>
              <h4 class="card-title">ReleaseDate: ${details.releaseDate}</h4>
              <h5 class="card-text">Brand: ${details.brand}</h5>
              <h5 class="card-text">Storage: ${details.mainFeatures.storage}</h5>
              <h5 class="card-text">Display: ${details.mainFeatures.displaySize}</h5>
            </div>
    `;
    phoneDetail.appendChild(div)

    
}    