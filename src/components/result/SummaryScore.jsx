const SummaryScore = ({score, questions, percentage}) => {

  const commonStyles = "mb-3";
  return (
    <>
    <div
        className={commonStyles}
        >Your score: {score}/{questions.length}
        </div>
        <div
        className={commonStyles}
        >Percentage score: {percentage}%
        </div>
    </>
  )
}

export default SummaryScore;
