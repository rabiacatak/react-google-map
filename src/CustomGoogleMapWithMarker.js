import React from 'react'
import smallBlueTrucker from "../public/smallBlueTrucker.png";
import smallGreenTrucker from "../public/smallGreenTrucker.png";
import smallOrangeTrucker from "../public/smallOrangeTrucker.png";




class CustomGoogleMapWithMarker extends React.PureComponent {
    render() {
        const { compose, withProps, lifecycle } = require("recompose");
        const labelSize = { width: 600};
        const labelPadding = 100;
        const {
            withScriptjs,
            withGoogleMap,
            GoogleMap,
            Marker,
        } = require("react-google-maps");
        const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");


        const CustomGoogleMap1 = compose(
            withProps({
                googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBfKR647GzCciyQWgr5KSrfgGr88mxpRnc&v=3&libraries=geometry,drawing,places&region=TR&language=TR",
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div style={{ height: this.props.height ? this.props.height : '700px' }} />,
                mapElement: <div style={{ height: `100%` }} />,
                // markerPositions:this.props.pickupLocation ? this.props.locations : [],
                // truckLocation: this.props.truckLocation,
                locations : this.props.locations,
                locs: this.props.locs,
                noZoom:this.props.noZoom
            }),
            lifecycle({
                shouldComponentUpdate( nextProps, nextState ){
                    if(this.state.latitude != nextState.center.lat() && nextState.center.lat()!=38.783602){
                        return true
                    }
                    return false;
                },
                componentWillMount() {
                    const refs = {}
                    var that=this;
                    this.setState({
                        latitude: 0,
                        bounds: null,
                        center: {
                            lat:38.4237, lng:27.1428
                        },
                        markers: [],
                    })
                },
            }),
            withScriptjs,
            withGoogleMap
        )(props =>
            <GoogleMap
                ref={props.onMapMounted}
                defaultZoom={10}
                center={props.center}
                onBoundsChanged={props.onBoundsChanged}
                componentRestrictions={{country: 'IN'}}
                defaultOptions={{mapTypeControl: false, zoomControl:false, scaleControl: true,draggable: !props.noZoom, streetViewControl: false,  fullscreenControl: false}}
            >
                return (
                <>
                    <Marker
                        key="2"
                    />
                </>
                )
                )
                <MarkerWithLabel
                    labelStyle={{ textAlign: "center",width:"178px",height: "30px", backgroundColor: "#0047CC", boxSizing: "border-box", border: "2.4px solid #FFFFFF",  borderRadius: "22.4px",padding:"8px"}}
                    labelAnchor={{ x: 90 , y: 65 }}
                    key="123"
                    icon={smallBlueTrucker}
                    position={{ lat: 37.97918	, lng: 23.716647}}>
                    <CustomText text="NAKLİYE AŞAMASINDA" style={{color:"#FFFFFF",textAlign:"center"}}/>
                </MarkerWithLabel>

                <MarkerWithLabel
                    labelStyle={{ textAlign: "center",width:"178px", height: "30px",backgroundColor: "#0047CC", boxSizing: "border-box", border: "2.4px solid #FFFFFF",  borderRadius: "22.4px",padding:"8px"}}
                    labelAnchor={{ x: 90 , y: 65}}
                    key="123"
                    icon={smallBlueTrucker}
                    position={{ lat: 38.619099	, lng: 27.428921}}>
                    <CustomText text="NAKLİYE AŞAMASINDA" style={{color:"#FFFFFF",textAlign:"center"}}/>
                </MarkerWithLabel>

                <MarkerWithLabel
                    labelStyle={{ textAlign: "center",width:"80px",height: "28.8px", backgroundColor: "#23BC02", boxSizing: "border-box", border: "2.4px solid #FFFFFF",  borderRadius: "22.4px", padding:"8px"}}
                    labelAnchor={{ x: 40 , y: 65}}
                    key="123"
                    icon={smallGreenTrucker}
                    position={{ lat: 38.3250	, lng: 26.7668}}>
                    <CustomText text="BOŞTA" style={{color:"#FFFFFF",textAlign:"center"}}/>
                </MarkerWithLabel>
                <MarkerWithLabel
                    labelStyle={{ textAlign: "center",width:"140px", height: "28.8px",backgroundColor: "#FA6400", boxSizing: "border-box", border: "2.4px solid #FFFFFF",  borderRadius: "22.4px", padding:"8px"}}
                    labelAnchor={{ x: 70, y: 65 }}
                    key="123"
                    icon={smallOrangeTrucker}
                    position={{ lat: 38.41885	, lng: 27.12872}}>
                    <CustomText text="YÜK TALEBİ VAR" style={{color:"#FFFFFF",textAlign:"center"}}/>
                </MarkerWithLabel>

            </GoogleMap>
        );
        return(
            <CustomGoogleMap1 mapCallback={this.props.mapCallback}/>
        )
    }
}
export default CustomGoogleMapWithMarker