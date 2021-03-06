
// updates the UI with data received from back end
export const updateUI = ({rh, name, pres, temp, precip, webformatURL, description, forecastDate, countryName, 
    capital, currencies, currSymb, languages, population, flag}) => {
    
    localStorage.clear()
    // console.log(rh, name, pres, temp, precip, webformatURL, description, forecastDate, countryNamecapital, currencies, currSymb, languages, population, flag)
    
    const errorEl = document.querySelector('.error')
    const uiDataEls = document.querySelectorAll('.ui-data')
    
    if(name == 'invalid') {
        errorEl.innerHTML = '<i class="fas fa-exclamation-triangle"></i>city not recognized by GeoNames please try again!'
        errorEl.classList.remove('hide')
        uiDataEls.forEach(uiDataEl => {
            uiDataEl.classList.add('hide')
        })
    } else {
        
        uiDataEls.forEach(uiDataEl => {
            uiDataEl.classList.remove('hide')
        })
        
        if(!errorEl.classList.contains('hide')){
            errorEl.classList.add('hide')
        }
        
        if(rh == 'N/A') {
            document.querySelector('.city-country').innerHTML = `${name}, ${countryName}`
            document.querySelector('.description').innerHTML = `Description: ${description}`
            document.querySelector('.forecast-date').innerHTML = `Forecast for ${forecastDate}:`
            document.querySelector('.temperature').innerHTML = `Temperature: N/A`
            document.querySelector('.rh').innerHTML = `Humidity: N/A`
            document.querySelector('.pres').innerHTML = `Pressure: N/A`
            document.querySelector('.precip').innerHTML = `Precipitation: N/A`
            document.querySelector('.city-image').src = `${webformatURL}`
        }else {
            document.querySelector('.city-country').innerHTML = `${name}, ${countryName}`
            document.querySelector('.description').innerHTML = `Description: ${description}`
            document.querySelector('.forecast-date').innerHTML = `Forecast for ${forecastDate}:`
            document.querySelector('.temperature').innerHTML = `Temperature: ${temp} degrees Celsius`
            document.querySelector('.rh').innerHTML = `Humidity: ${rh} %`
            document.querySelector('.pres').innerHTML = `Pressure: ${pres} mb`
            document.querySelector('.precip').innerHTML = `Precipitation: ${precip} mm`
            document.querySelector('.city-image').src = `${webformatURL}`
        }
        
        document.querySelector('.country-info').innerHTML = `Facts about: ${countryName}`
        document.querySelector('.capital').innerHTML = `Capital: ${capital}`
        document.querySelector('.currencies').innerHTML = `Currency: ${currSymb} ${currencies}`
        document.querySelector('.languages').innerHTML = `One of the official languages is: ${languages}`
        document.querySelector('.population').innerHTML = `Population: ${population}`
        document.querySelector('.flag-image').src = `${flag}`
    }
    
    localStorage.setItem('rh', rh)
    localStorage.setItem('name', name)
    localStorage.setItem('pres', pres)
    localStorage.setItem('temp', temp)
    localStorage.setItem('precip', precip)
    localStorage.setItem('webformatURL', webformatURL)
    localStorage.setItem('description', description)
    localStorage.setItem('forecastDate', forecastDate)
    localStorage.setItem('countryName', countryName)

    localStorage.setItem('capital', capital)
    localStorage.setItem('currencies', currencies)
    localStorage.setItem('currSymb', currSymb)
    localStorage.setItem('languages', languages)
    localStorage.setItem('population', population)
    localStorage.setItem('flag', flag)
}


// makes post to back end with city and date
export const makePost = async (url='', data={}) => {
    const resp = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
    
    try {
        const response = await resp.json()
        // console.log(response)
        return response
    } catch(error) {
        console.log(`error${error}`)
    }
}

