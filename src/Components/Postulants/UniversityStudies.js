import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const UniversityStudies = ({ postulant, collectData, id }) => {
  const template = {
    startDate: '',
    endDate: '',
    description: '',
    institute: '',
    id: uuidv4()
  };
  const [universityStudies, setUniversityStudies] = useState(
    postulant ? postulant.studies.universityStudies : [template]
  );
  const sendData = (data) => {
    collectData(data, 'universityStudies');
    setUniversityStudies(data);
  };
  useEffect(() => sendData(universityStudies), []);

  return (
    <div>
      <h4>University studies</h4>
      {universityStudies.map((universityStudy, index) => {
        return (
          <div key={universityStudy.id}>
            <input
              defaultValue={universityStudy.startDate}
              placeholder="Start date"
              onChange={({ target: { value } }) => {
                universityStudies[index].startDate = value; //no se puede encontrar el indice de un array a través de un objeto
                sendData([...universityStudies]);
              }}
            />
            <input
              defaultValue={universityStudy.endDate}
              placeholder="End date"
              onChange={({ target: { value } }) => {
                universityStudies[index].endDate = value; //no se puede encontrar el indice de un array a través de un objeto
                sendData([...universityStudies]);
              }}
            />
            <textarea
              defaultValue={universityStudy.description}
              placeholder="Description"
              onChange={({ target: { value } }) => {
                universityStudies[index].description = value; //no se puede encontrar el indice de un array a través de un objeto
                sendData([...universityStudies]);
              }}
            ></textarea>
            <input
              defaultValue={universityStudy.institute}
              placeholder="Institute"
              onChange={({ target: { value } }) => {
                universityStudies[index].institute = value; //no se puede encontrar el indice de un array a través de un objeto
                sendData([...universityStudies]);
              }}
            />
          </div>
        );
      })}
      <button
        onClick={(e) => {
          e.preventDefault();
          setUniversityStudies([...universityStudies, template]);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default UniversityStudies;
