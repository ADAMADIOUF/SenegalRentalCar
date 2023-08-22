import React, { useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import dataQuestions from '../dataQuestions'

const Questions = () => {
  const [expandedIds, setExpandedIds] = useState([])

  const toggleQuestion = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((itemId) => itemId !== id))
    } else {
      setExpandedIds([...expandedIds, id])
    }
  }

  return (
    <div className='section-center'>
      <h3>Questions fréquemment posées</h3>

      <div className='questions '>
        {dataQuestions.map((item, index) => (
          <div
            key={item._id}
            className={`question ${
              expandedIds.includes(item._id) ? 'expanded' : ''
            }`}
          >
            <div className='question-icon'>
              <AiOutlineQuestionCircle
                onClick={() => toggleQuestion(item._id)}
              />
            </div>
            <div className='question-content'>
              <div
                className='question-header'
                onClick={() => toggleQuestion(item._id)}
              >
                <h3>{item.question}</h3>
                {expandedIds.includes(item._id) ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </div>
              {expandedIds.includes(item._id) && <p>{item.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Questions
