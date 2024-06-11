import { Fragment } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild
} from '@headlessui/react'
import { ExpensesForm } from '../ExpensesForm'
import { useBudget } from '../../hooks/useBudget'

export const ExpenseModal = () => {
  const { state, dispatch } = useBudget()

  return (
    <>
      <div className='fixed right-5 bottom-5 flex items-center justify-center hover:-translate-y-1 transition-all'>
        <button
          onClick={() => {
            dispatch({ type: 'open-modal' })
          }}
          type='button'
        >
          <PlusCircleIcon className='w-16 h-16 text-blue-600 hover:text-blue-700 rounded-full transition-all' />
        </button>
      </div>

      <Transition
        appear
        show={state.modal}
        as={Fragment}
      >
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => {
            dispatch({ type: 'close-modal' })
          }}
        >
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-75' />
          </TransitionChild>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <ExpensesForm />
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}