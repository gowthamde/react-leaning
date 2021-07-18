import React, { Component } from 'react';

class GowthamSearchFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredText: '',
            isStockAvailable: false
        }
        this.StockAvalabilityChange = this.StockAvalabilityChange.bind(this);
        this.FilterSearchValueChange = this.FilterSearchValueChange.bind(this); 
    }
    StockAvalabilityChange(value) {
        console.log(value)
        this.setState({
          isStockAvailable: value
        })
    }
    FilterSearchValueChange(value) {
        console.log(value)
        this.setState({
            filteredText: value
        })
    }

    render() {
        return (
            <div>
                <SearchArea 
                text={this.state.filteredText} 
                isStockAvailable={this.state.isStockAvailable}
                OnSearchTextChange={this.FilterSearchValueChange}
                OnStockFlagChange={this.StockAvalabilityChange}/>
                <ProductContainer 
                products={ this.props.products } 
                text={this.state.filteredText} 
                isStockAvailable={this.state.isStockAvailable}/>
            </div>
        )
    }
}

export default GowthamSearchFilter;

class SearchArea extends Component {

    constructor(props) {
        super(props);
        this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
        this.handleStockFlagChange = this.handleStockFlagChange.bind(this);
    }

    handleStockFlagChange(e) {
        console.log(e)
        this.props.OnStockFlagChange(e.target.checked);
    }

    handleSearchValueChange(e) {
        this.props.OnSearchTextChange(e.target.value);
    }

    render() {
        return (
                <form>
                    <input type="text" placeholder="Search Products here.." value={this.props.text} 
                    onChange={this.handleSearchValueChange}/>
                    <br />
                    <p>
                    <input type="checkbox" checked={this.props.isStockAvailable}
                    onChange={this.handleStockFlagChange}/> {' '} Filter by availability 
                    </p>
                </form>
        )
    }
}

class ProductContainer extends Component {
    render() {
        const filteredText = this.props.text;
        const stockAvail = this.props.isStockAvailable
        const rows = [];
        let lastCatrgory = null;
        this.props.products.forEach((product) => {
            if (product.name.indexOf(filteredText) === -1) {
                return
            }
            if (stockAvail && !product.stocked) {
                return;
              }
            if (product.category !== lastCatrgory) {
                rows.push(
                    <ProductCategoryRow category={product.category}
                    key={product.category} />
                )
            }
                rows.push(
                    <ProductRow product={product}
                    key={product.name} />
                )
            lastCatrgory = product.category;
        })
        return (
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}
class ProductCategoryRow extends Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    { category }
                </th>
            </tr>
        )
    }
}
class ProductRow extends Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? product.name :
        <span style={{color: 'red'}}>{product.name}</span>
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}