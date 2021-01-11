import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'


const List = ({name, time, ingredients, descriptions, removeIngredient, removeDescription, removeName, removeTime, editIngredient, editDescription, editName}) => {
    return (
        <div className="grocery-list">    
                    <article className="grocery-item">
                        <h4>name: </h4>
                        <p className="title">{name}</p>
                        <div className="btn-container">
                            <button type="button" className="edit-btn"
                                onClick={() => {editName()}}>
                                <FaEdit/>
                            </button>
                            <button type="button" className="delete-btn"
                                onClick={() => {removeName()}}>
                                <FaTrash/>
                            </button>
                        </div>
                    </article>

                    <article className="grocery-item">
                        <h4>Time: </h4>
                        <p>{time} {time ? 'minutes' : ''}</p>
                        <div className="btn-container">
                            <button type="button" className="edit-btn"
                                onClick={() => {}}>
                                <FaEdit/>
                            </button>
                            <button type="button" className="delete-btn"
                                onClick={() => {removeTime()}}>
                                <FaTrash/>
                            </button>
                        </div>
                    </article>
                    <article className="grocery-item">
                        <h4>Ingredients: </h4>
                        <ul> 
                        {ingredients.map((item) => {
                            const {id, ingredientName} = item
                            return (
                                <li key={id} className="grocery-item">
                                    <p className="title">{ingredientName} </p>
                                    <div className="btn-container">
                                        <button type="button" className="edit-btn"
                                            onClick={() => {editIngredient(id)}}>
                                            <FaEdit/>
                                        </button>
                                        <button type="button" className="delete-btn"
                                            onClick={() => {removeIngredient(id)}}>
                                            <FaTrash/>
                                        </button>
                                    </div>
                                </li>
                            )
                        })}
                        </ul>
                      
                    </article>

                    <article className="grocery-item">
                        <h4>Description: </h4>
                        <ul> 
                        {descriptions.map((item) => {
                            const {id, descriptionName} = item
                            return (
                                <li key={id} className="grocery-item">
                                    <p className="title">{descriptionName} </p>
                                    <div className="btn-container">
                                        <button type="button" className="edit-btn"
                                            onClick={() => {editDescription(id)}}>
                                            <FaEdit/>
                                        </button>
                                        <button type="button" className="delete-btn"
                                            onClick={() => {removeDescription(id)}}>
                                            <FaTrash/>
                                        </button>
                                    </div>
                                </li>
                            )
                        })}
                        </ul>
                    </article>
              
        </div>
    )
}

export default List