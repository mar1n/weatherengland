import React from 'react';

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(props) {
        //console.log(this.props.city);
        const city = this.props.city;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric,uk&APPID=86cf7b40142a1bc1aca8a976db7133ce`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        function degToCompass(num) {
            let val = Math.floor((num / 22.5) + 0.5);
            let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
            return arr[(val % 16)];
        }
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <>
                    <section>
                        <h1 className='cityName'>{items.name}</h1>
                        <h1 className='temperature'>{Math.round(items.main.temp - 273.15)}&#8451;</h1>
                        <p className='icon'><img src={require(`../icons/${items.weather[0].icon}.png`)} alt={items.weather[0].icon} /></p>
                        <h2 className='description'>{items.weather[0].description}</h2>
                        <p className='sunrise'>Sunrise {`${new Date(items.sys.sunrise * 1000).getHours()}:${(new Date(items.sys.sunrise * 1000).getMinutes() < 10 ? '0' : '') + new Date(items.sys.sunrise * 1000).getMinutes()}am `}Sunset {`${new Date(items.sys.sunset * 1000).getHours()}:${(new Date(items.sys.sunset * 1000).getMinutes() < 10 ? '0' : '') + new Date(items.sys.sunset * 1000).getMinutes()}pm`}</p>
                        <p className='humidity'>Humidity {items.main.humidity}% Wind {degToCompass(items.wind.deg)} {items.wind.speed * 2} mph</p>
                        <p className='pressure'>Pressure {items.main.pressure} hPa</p>
                    </section>
                </>
            );
        }
    }
}

export default Api;