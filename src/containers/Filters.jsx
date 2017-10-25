import React from 'react';
import { Link } from 'react-router-dom';

const Filters = ({ filter, text }) => (
    <Link
        to={filter === 'all' ? '' : filter}
        activeStyle={{
            textDecoration: 'none',
            color: 'black'
        }}
    >
        {text}
    </Link>
);

export default Filters


/*
    import { setVisibilityFilter } from '../actions'
    import FilterButton from '../components/FilterButton'

    const mapStateToProps = (state, ownProps) => {
    let active = state.visibilityFilter.indexOf(ownProps.filter) !== -1
    return {
        active: active,
        text: ownProps.text,
        className: ownProps.className
    }
    }

    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            onClick: () => {
                dispatch(setVisibilityFilter(ownProps.filter))
            }
        }
    }

    const Filters = connect(
        mapStateToProps,
        mapDispatchToProps
    )(FilterButton)

    export default Filters */