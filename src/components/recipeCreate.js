import { React, useState } from 'react';

const recipeCreate = () => {
    return (
        <div>
            <section className="section-center">
        <form className="grocery-form"> 
            <h3>Grocery Bud</h3>
            <div className="form-control">
                <input 
                    type="text" 
                    className="grocery" 
                    placeholder="e.g.eggs"
                    
                />
                <button type="submit" className="submit-btn">
                </button>
            </div>
        </form>
            <div className="grocery-container">
                {/* <List/> */}
                <button className="clear-btn">
                    clear items
                </button>
            </div>
    </section>
        </div>
    )
}

export default recipeCreate;
