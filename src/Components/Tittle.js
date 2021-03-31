import React from 'react'

function Title({ tittle, span }) {
    return (
        <div className="Tittle">
            <h3>
                {tittle}
                <span>{span}</span>
            </h3>

        </div>
    )
}

export default Title
