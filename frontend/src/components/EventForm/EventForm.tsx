import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../Button/Button';
import { eventSchema } from '../../helpers/schemas';

const EventForm = ({
  formSubmit,
  labels,
  setIsHidden,
}: {
  formSubmit: (data: any) => void;
  labels: Label[];
  setIsHidden: (isHidden: boolean) => void;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: zodResolver(eventSchema) });

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
          <label className="text-sm font-bold" htmlFor="labelId">
            Label
          </label>
          <select
            className="flex-grow bg-black border border-zinc-900 rounded-md px-1 py-0.5"
            id="labelId"
            {...register('labelId')}
          >
            {labels.map((label) => (
              <option className="capitalize" key={label.id} value={label.id}>
                {label.name}
              </option>
            ))}
          </select>
          {errors.labelId?.message && (
            <p className="text-red-500 text-xs">
              {errors.labelId.message.toString()}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button
          label="Cancel"
          type="secondary"
          handleClick={() => setIsHidden(true)}
        />
        <Button label="Submit" type="submit" />
      </div>
    </form>
  );
};

export default EventForm;
