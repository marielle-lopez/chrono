import { useForm } from 'react-hook-form';

const EventForm = () => {
  const { register } = useForm();

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register('name')} />
      </div>

      <div>
        <label htmlFor="startDate">Start Date</label>
        <input
          type="datetime-local"
          id="startDate"
          {...register('startDate')}
        />
      </div>

      <div>
        <label htmlFor="endDate">End Date</label>
        <input type="datetime-local" id="endDate" {...register('endDate')} />
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" {...register('location')} />
      </div>

      <div>
        <label htmlFor="label">Label</label>
        <select id="label" {...register('label')}>
          <option>Label 1</option>
          <option>Label 2</option>
          <option>Label 3</option>
        </select>
      </div>
    </form>
  );
};

export default EventForm;
