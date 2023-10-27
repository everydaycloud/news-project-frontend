import {useNavigate} from 'react-router-dom';

const TopicDropdown = ({topics, setChosenTopic, chosenTopic}) => {

const navigate = useNavigate();

const handleSelectChange = (e) => {
    setChosenTopic(e.target.value);
    navigate(`/articles/topics/${e.target.value}`)
  };

  if (topics.length === 0) return <></>
  return (
    <>
    <section>
      <label htmlFor="dropdown">Choose a topic </label>
      <select id="dropdown" value={chosenTopic} onChange={handleSelectChange}>
        <option value="">Select from dropdown</option>
        {topics.map((topic, index) => (
          <option key={index} value={topic.slug}>
            {topic.slug} 
          </option>
        ))}
      </select>
    </section>
    </>
  )
}
export default TopicDropdown