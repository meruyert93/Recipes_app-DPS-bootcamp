import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'


const List = ({name, time, ingredient, description}) => {
    return (
        <div className="grocery-list">    
                    <article className="grocery-item">
                        <h4>name: </h4>
                        <p className="title">{name}</p>
                        <div className="btn-container">
                            <button type="button" className="edit-btn"
                                onClick={() => {}}>
                                <FaEdit/>
                            </button>
                            <button type="button" className="delete-btn"
                                onClick={() => {}}>
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
                                onClick={() => {}}>
                                <FaTrash/>
                            </button>
                        </div>
                    </article>
                    <article className="grocery-item">
                        <h4>Ingredients: </h4>
                        <p>{ingredient} </p>
                        <div className="btn-container">
                            <button type="button" className="edit-btn"
                                onClick={() => {}}>
                                <FaEdit/>
                            </button>
                            <button type="button" className="delete-btn"
                                onClick={() => {}}>
                                <FaTrash/>
                            </button>
                        </div>
                    </article>

                    <article className="grocery-item">
                        <h4>Description: </h4>
                        <p>{ingredient} </p>
                        <div className="btn-container">
                            <button type="button" className="edit-btn"
                                onClick={() => {}}>
                                <FaEdit/>
                            </button>
                            <button type="button" className="delete-btn"
                                onClick={() => {}}>
                                <FaTrash/>
                            </button>
                        </div>
                    </article>
              
        </div>
    )
}

export default List