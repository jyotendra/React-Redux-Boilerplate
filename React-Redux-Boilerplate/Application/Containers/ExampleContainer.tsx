
    import React from "react";
    import { connect } from "react-redux";

    function mapStateToProps(state, ownProps) {
        return {
            allProperty: state.property.PropertyList,
            propertyCount: state.property.PropertyCount,
        };
    }

    function mapDispatchToProps(dispatch, ownProps) {
        return {
            setIsListChanged: (boolValue) => dispatch(SetIsListChanged(boolValue)),
            setPropertyCount: (count) => dispatch(SetPropertyCount(count)),
        };
    }
    
    class PropertyContainer extends React.Component<any, undefined>
    {
        // Class declared
    }
   
    export default connect(mapStateToProps, mapDispatchToProps)(PropertyContainer);

