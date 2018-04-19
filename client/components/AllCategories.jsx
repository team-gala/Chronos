import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCategories } from '../store/categories';

/* ---- Component ---- */
class AllCategories extends Component {

  componentDidMount(){
    this.props.loadCategories();
  }

  render () {

    const { categories } = this.props;
    return (
      <div id="allCategories">
      {
          categories.map((category) => (
            <div key={category.id}>
              <Link to={`/categories/${category.id}`}>{category.name}</Link>
            </div>
          ))
        }
      </div>
    );
  }
}


/* ---- Container ---- */
const mapStateToProps = state => ({categories: state.categories});

const mapDispatchToProps = dispatch => ({loadCategories() {
  dispatch(loadCategories());
}});

const Container = connect(mapStateToProps, mapDispatchToProps)(AllCategories);

export default Container;