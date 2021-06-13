import React from 'react';
import { Input } from '../../Inputs';
import './style.css';
// import { Formik } from 'formik';

export const FormStep2 = ({ errors, values, handleChange }) => {
  return (
    <div className="formStep2">
      <h2>Sem přidej detaily o Vaší svatbě</h2>
      <p> Bla bla bla bla bla</p>
      <div className="container2">
        <div className="weddingPlace">
          <Input
            className="input"
            type="date"
            name="date"
            label="Datum"
            value={values.date}
            onChange={handleChange('date')}
            error={errors.date}
          />
          <Input
            className="input"
            type="text"
            name="weddingPlace"
            label="Místo svatby"
            value={values.weddingPlace}
            onChange={handleChange('weddingPlace')}
            error={errors.weddingPlace}
          />
          <Input
            className="input"
            type="text"
            name="celebrationPlace"
            label="Místo oslavy"
            value={values.celebrationPlace}
            onChange={handleChange('celebrationPlace')}
            error={errors.celebrationPlace}
          />
        </div>

        <h2>Popište program Vaší svatby</h2>

        <div className="weddingProgram">
          <Input
            className="input"
            type="time"
            name="timeFrom1"
            label="Čas od"
            value={values.timeFrom1}
            onChange={handleChange('timeFrom1')}
            error={errors.timeFrom1}
          />{' '}
          <Input
            className="input"
            type="time"
            name="timeTo1"
            label="Čas do"
            value={values.timeTo1}
            onChange={handleChange('timeTo1')}
            error={errors.timeTo1}
          />{' '}
          <Input
            className="input"
            type="text"
            name="program1"
            label="Program/aktivita"
            value={values.program1}
            onChange={handleChange('program1')}
            error={errors.program1}
          />
        </div>
        <div className="weddingProgram">
          <Input
            className="input"
            type="time"
            name="timeFrom2"
            label="Čas od"
            value={values.timeFrom2}
            onChange={handleChange('timeFrom2')}
            error={errors.timeFrom2}
          />

          <Input
            className="input"
            type="time"
            name="timeTo2"
            label="Čas do"
            value={values.timeTo2}
            onChange={handleChange('timeTo2')}
            error={errors.timeTo2}
          />

          <Input
            className="input"
            type="text"
            name="program2"
            label="Program/aktivita"
            value={values.program2}
            onChange={handleChange('program2')}
            error={errors.program2}
          />
        </div>
        <div className="weddingProgram">
          <Input
            className="input"
            type="time"
            name="timeFrom3"
            label="Čas od"
            value={values.timeFrom3}
            onChange={handleChange('timeFrom3')}
            error={errors.timeFrom3}
          />

          <Input
            className="input"
            type="time"
            name="timeTo3"
            label="Čas do"
            value={values.timeTo3}
            onChange={handleChange('timeTo3')}
            error={errors.timeTo3}
          />

          <Input
            className="input"
            type="text"
            name="program3"
            label="Program/aktivita"
            value={values.program3}
            onChange={handleChange('program3')}
            error={errors.program3}
          />
        </div>
        <div className="weddingProgram">
          <Input
            className="input"
            type="time"
            name="timeFrom4"
            label="Čas od"
            value={values.timeFrom4}
            onChange={handleChange('timeFrom4')}
            error={errors.timeFrom4}
          />

          <Input
            className="input"
            type="time"
            name="timeTo4"
            label="Čas do"
            value={values.timeTo4}
            onChange={handleChange('timeTo4')}
            error={errors.timeTo4}
          />

          <Input
            className="input"
            type="text"
            name="program4"
            label="Program/aktivita"
            value={values.program4}
            onChange={handleChange('program4')}
            error={errors.program4}
          />
        </div>
        <div className="weddingProgram">
          <Input
            className="input"
            type="time"
            name="timeFrom5"
            label="Čas od"
            value={values.timeFrom5}
            onChange={handleChange('timeFrom5')}
            error={errors.timeFrom5}
          />

          <Input
            className="input"
            type="time"
            name="timeTo5"
            label="Čas do"
            value={values.timeTo5}
            onChange={handleChange('timeTo5')}
            error={errors.timeTo5}
          />

          <Input
            className="input"
            type="text"
            name="program5"
            label="Program/aktivita"
            value={values.program5}
            onChange={handleChange('program5')}
            error={errors.program5}
          />
        </div>
        <div className="weddingProgram">
          <Input
            className="input"
            type="time"
            name="timeFrom6"
            label="Čas od"
            value={values.timeFrom6}
            onChange={handleChange('timeFrom6')}
            error={errors.timeFrom6}
          />

          <Input
            className="input"
            type="time"
            name="timeTo6"
            label="Čas do"
            value={values.timeTo6}
            onChange={handleChange('timeTo6')}
            error={errors.timeTo6}
          />

          <Input
            className="input"
            type="text"
            name="program6"
            label="Program/aktivita"
            value={values.program6}
            onChange={handleChange('program6')}
            error={errors.program6}
          />
        </div>
        <div className="weddingProgram">
          <Input
            className="input"
            type="time"
            name="timeFrom7"
            label="Čas od"
            value={values.timeFrom7}
            onChange={handleChange('timeFrom7')}
            error={errors.timeFrom7}
          />

          <Input
            className="input"
            type="time"
            name="timeTo7"
            label="Čas do"
            value={values.timeTo7}
            onChange={handleChange('timeTo7')}
            error={errors.timeTo7}
          />

          <Input
            className="input"
            type="text"
            name="program7"
            label="Program/aktivita"
            value={values.program7}
            onChange={handleChange('program7')}
            error={errors.program7}
          />
        </div>
        <div className="weddingProgram">
          <Input
            className="input"
            type="time"
            name="timeFrom8"
            label="Čas od"
            value={values.timeFrom8}
            onChange={handleChange('timeFrom8')}
            error={errors.timeFrom8}
          />

          <Input
            className="input"
            type="time"
            name="timeTo8"
            label="Čas do"
            value={values.timeTo8}
            onChange={handleChange('timeTo8')}
            error={errors.timeTo8}
          />

          <Input
            className="input"
            type="text"
            name="program8"
            label="Program/aktivita"
            value={values.program8}
            onChange={handleChange('program8')}
            error={errors.program8}
          />
        </div>
        <div className="weddingProgram">
          <Input
            className="input"
            type="time"
            name="timeFrom9"
            label="Čas od"
            value={values.timeFrom9}
            onChange={handleChange('timeFrom9')}
            error={errors.timeFrom9}
          />

          <Input
            className="input"
            type="time"
            name="timeTo9"
            label="Čas do"
            value={values.timeTo9}
            onChange={handleChange('timeTo9')}
            error={errors.timeTo9}
          />

          <Input
            className="input"
            type="text"
            name="program9"
            label="Program/aktivita"
            value={values.program9}
            onChange={handleChange('program9')}
            error={errors.program9}
          />
        </div>
        <div className="weddingProgram">
          <Input
            className="input"
            type="time"
            name="timeFrom10"
            label="Čas od"
            value={values.timeFrom10}
            onChange={handleChange('timeFrom10')}
            error={errors.timeFrom10}
          />

          <Input
            className="input"
            type="time"
            name="timeTo10"
            label="Čas do"
            value={values.timeTo10}
            onChange={handleChange('timeTo10')}
            error={errors.timeTo10}
          />

          <Input
            className="input"
            type="text"
            name="program10"
            label="Program/aktivita"
            value={values.program10}
            onChange={handleChange('program10')}
            error={errors.program10}
          />
        </div>
      </div>
    </div>
  );
};
