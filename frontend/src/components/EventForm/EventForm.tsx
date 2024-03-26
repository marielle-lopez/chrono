import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { schema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../Button/Button';

const EventForm = ({ formSubmit }: { formSubmit: (data: any) => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <form
      className="flex flex-col flex-grow gap-8"
      onSubmit={handleSubmit(formSubmit)}
    >
      <div className="flex flex-col flex-grow gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold" htmlFor="name">
            Name
          </label>
          <input
            className="flex-grow bg-black border border-zinc-900 rounded-md px-1.5 py-0.5"
            type="text"
            id="name"
            {...register('name')}
          />
          {errors.name?.message && (
            <p className="text-red-500 text-xs">
              {errors.name.message.toString()}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold" htmlFor="startDate">
              Start Date
            </label>
            <input
              className="bg-black border border-zinc-900 rounded-md px-1.5 py-0.5"
              type="datetime-local"
              id="startDate"
              {...register('startDate')}
            />
            {errors.startDate?.message && (
              <p className="text-red-500 text-xs">
                {errors.startDate.message.toString()}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold" htmlFor="endDate">
              End Date
            </label>
            <input
              className="bg-black border border-zinc-900 rounded-md px-1.5 py-0.5"
              type="datetime-local"
              id="endDate"
              {...register('endDate')}
            />
            {errors.endDate?.message && (
              <p className="text-red-500 text-xs">
                {errors.endDate.message.toString()}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold" htmlFor="location">
            Location
          </label>
          <input
            className="flex-grow bg-black border border-zinc-900 rounded-md px-1.5 py-0.5"
            type="text"
            id="location"
            {...register('location')}
          />
          {errors.location?.message && (
            <p className="text-red-500 text-xs">
              {errors.location.message.toString()}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold" htmlFor="label">
            Label
          </label>
          <select
            className="flex-grow bg-black border border-zinc-900 rounded-md px-1 py-0.5"
            id="label"
            {...register('label')}
          >
            <option>Personal</option>
            <option>Work</option>
            <option>University</option>
          </select>
          {errors.label?.message && (
            <p className="text-red-500 text-xs">
              {errors.label.message.toString()}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Button label="Submit" type="primary" />
      </div>
    </form>
  );
};

export default EventForm;
