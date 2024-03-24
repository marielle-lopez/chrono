import { useForm } from 'react-hook-form';

const EventForm = () => {
  const { register } = useForm();

  return (
    <form className="flex flex-col flex-grow gap-3">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold" htmlFor="name">
          Name
        </label>
        <input
          className="flex-grow bg-stone-900 border border-stone-800 rounded-md"
          type="text"
          id="name"
          {...register('name')}
        />
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold" htmlFor="startDate">
            Start Date
          </label>
          <input
            className="bg-stone-900 border border-stone-800 rounded-md px-1.5"
            type="datetime-local"
            id="startDate"
            {...register('startDate')}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold" htmlFor="endDate">
            End Date
          </label>
          <input
            className="bg-stone-900 border border-stone-800 rounded-md px-1.5"
            type="datetime-local"
            id="endDate"
            {...register('endDate')}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold" htmlFor="location">
          Location
        </label>
        <input
          className="flex-grow bg-stone-900 border border-stone-800 rounded-md"
          type="text"
          id="location"
          {...register('location')}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold" htmlFor="label">
          Label
        </label>
        <select
          className="flex-grow bg-stone-900 border border-stone-800 rounded-md px-1"
          id="label"
          {...register('label')}
        >
          <option>Label 1</option>
          <option>Label 2</option>
          <option>Label 3</option>
        </select>
      </div>
    </form>
  );
};

export default EventForm;
