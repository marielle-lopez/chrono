import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { eventSchema } from '../../helpers/schemas';
import { useEffect } from 'react';
import Button from '../Button/Button';

const EditEventForm = ({
  formSubmit,
  event,
}: {
  formSubmit: (data: object) => void;
  event: Event;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      name: event.name,
      location: event.location,
    },
  });

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
            <label className="text-sm font-bold" htmlFor="startedAt">
              Start Date
            </label>
            <input
              className="bg-black border border-zinc-900 rounded-md px-1.5 py-0.5"
              type="datetime-local"
              id="startedAt"
              {...register('startedAt')}
            />
            {errors.startedAt?.message && (
              <p className="text-red-500 text-xs">
                {errors.startedAt.message.toString()}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold" htmlFor="endedAt">
              End Date
            </label>
            <input
              className="bg-black border border-zinc-900 rounded-md px-1.5 py-0.5"
              type="datetime-local"
              id="endedAt"
              {...register('endedAt')}
            />
            {errors.endedAt?.message && (
              <p className="text-red-500 text-xs">
                {errors.endedAt.message.toString()}
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

      <div className="flex justify-between">
        <Button
          handleClick={() => console.log('This button deletes an event')}
          label="Delete"
          type="danger"
        />
        <div className="flex gap-3">
          <Button
            handleClick={() => console.log('This button closes the modal')}
            label="Cancel"
            type="secondary"
          />
          <Button
            handleClick={() =>
              console.log('This button submits event information changes')
            }
            label="Submit"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default EditEventForm;
