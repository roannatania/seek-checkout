import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import App from '../App';

describe('<App />', () => {
  describe('User selection', () => {
    it('should update Select field value', () => {
      const { getByTestId, getAllByTestId } = render(<App />)
      fireEvent.change(getByTestId('userName-select'), { target: { value: 'REC002' } })
      const options = getAllByTestId('userName-option')

      // order is based on ../../data/customers.ts
      expect(options[0].selected).toBeFalsy(); // default -- Please Select --
      expect(options[1].selected).toBeFalsy();
      expect(options[2].selected).toBeTruthy();
    })

    it('should update Header text', () => {
      const { getByTestId } = render(<App />)
      fireEvent.change(getByTestId('userName-select'), { target: { value: 'REC002' } })
      expect(getByTestId('header-text')).toHaveTextContent('Welcome, Axil Coffee Roasters!')
    })

    it('should reset cart so it should not be displayed', () => {
      const { queryByTestId, getByTestId } = render(<App />)
      fireEvent.change(getByTestId('userName-select'), { target: { value: 'REC001' } })
      expect(queryByTestId('cart')).not.toBeInTheDocument()
    })
  })

  describe('Add item to cart', () => {
    it('should display the cart and the item in the cart', () => {
      const { getByTestId, queryByTestId } = render(<App />)

      fireEvent.click(getByTestId('classic-add-to-cart-btn'))

      expect(queryByTestId('cart')).toBeInTheDocument()
      expect(queryByTestId('classic-cart-list-item')).toBeInTheDocument()
    })

    it('should display the right quantity in the cart', () => {
      const { getByTestId, queryByTestId } = render(<App />)

      fireEvent.click(getByTestId('classic-add-to-cart-btn'))
      fireEvent.click(getByTestId('classic-add-to-cart-btn'))
      fireEvent.click(getByTestId('premium-add-to-cart-btn'))

      expect(queryByTestId('classic-cart-qty')).toBeInTheDocument()
      expect(getByTestId('classic-cart-qty')).toHaveTextContent(2)
      expect(queryByTestId('premium-cart-qty')).toBeInTheDocument()
      expect(getByTestId('premium-cart-qty')).toHaveTextContent(1)
    })

    it('should display the cart total', () => {
      const { getByTestId, queryByTestId } = render(<App />)

      fireEvent.click(getByTestId('standout-add-to-cart-btn'))

      expect(queryByTestId('cart-total')).toBeInTheDocument()
      expect(getByTestId('cart-total')).toHaveTextContent('$322.99')
    })
  })

  describe('Cart Total Display', () => {
    describe('Non Privileged Customers (default)', () => {
      it('should display correct total ammount as non privileged customer if no user is selected', () => {
        const { getByTestId } = render(<App />)

        fireEvent.click(getByTestId('classic-add-to-cart-btn'))
        fireEvent.click(getByTestId('standout-add-to-cart-btn'))
        fireEvent.click(getByTestId('premium-add-to-cart-btn'))

        expect(getByTestId('cart-total')).toHaveTextContent('$987.97')
      })

      it('should display correct total ammount if non privileged customer is selected', () => {
        const { getByTestId } = render(<App />)

        fireEvent.change(getByTestId('userName-select'), { target: { value: 'REC005' } })

        fireEvent.click(getByTestId('classic-add-to-cart-btn'))
        fireEvent.click(getByTestId('standout-add-to-cart-btn'))
        fireEvent.click(getByTestId('premium-add-to-cart-btn'))

        expect(getByTestId('cart-total')).toHaveTextContent('$987.97')
      })
    })

    describe('Privileged Customers', () => {
      it('should display correct total ammount for SecondBite', () => {
        const { getByTestId } = render(<App />)

        fireEvent.change(getByTestId('userName-select'), { target: { value: 'REC001' } })

        fireEvent.click(getByTestId('classic-add-to-cart-btn'))
        fireEvent.click(getByTestId('classic-add-to-cart-btn'))
        fireEvent.click(getByTestId('classic-add-to-cart-btn'))
        fireEvent.click(getByTestId('premium-add-to-cart-btn'))

        expect(getByTestId('cart-total')).toHaveTextContent('$934.97')
      })

      it('should display correct total ammount for Axil Coffee Roasters', () => {
        const { getByTestId } = render(<App />)

        fireEvent.change(getByTestId('userName-select'), { target: { value: 'REC002' } })

        fireEvent.click(getByTestId('standout-add-to-cart-btn'))
        fireEvent.click(getByTestId('standout-add-to-cart-btn'))
        fireEvent.click(getByTestId('standout-add-to-cart-btn'))
        fireEvent.click(getByTestId('premium-add-to-cart-btn'))

        expect(getByTestId('cart-total')).toHaveTextContent('$1294.96')
      })

      it('should display correct total ammount for MYER', () => {
        const { getByTestId } = render(<App />)

        fireEvent.change(getByTestId('userName-select'), { target: { value: 'REC003' } })

        fireEvent.click(getByTestId('standout-add-to-cart-btn'))
        fireEvent.click(getByTestId('standout-add-to-cart-btn'))
        fireEvent.click(getByTestId('standout-add-to-cart-btn'))
        fireEvent.click(getByTestId('standout-add-to-cart-btn'))
        fireEvent.click(getByTestId('standout-add-to-cart-btn'))
        fireEvent.click(getByTestId('standout-add-to-cart-btn'))
        fireEvent.click(getByTestId('standout-add-to-cart-btn'))
        fireEvent.click(getByTestId('premium-add-to-cart-btn'))
        fireEvent.click(getByTestId('premium-add-to-cart-btn'))
        fireEvent.click(getByTestId('classic-add-to-cart-btn'))
        fireEvent.click(getByTestId('classic-add-to-cart-btn'))
        fireEvent.click(getByTestId('classic-add-to-cart-btn'))

        expect(getByTestId('cart-total')).toHaveTextContent('$3467.89')
      })

      it('should display correct total amount for JORA', () => {
        const { getByTestId } = render(<App />)

        fireEvent.change(getByTestId('userName-select'), { target: { value: 'REC006' } })

        fireEvent.click(getByTestId('premium-add-to-cart-btn'))
        fireEvent.click(getByTestId('premium-add-to-cart-btn'))
        fireEvent.click(getByTestId('premium-add-to-cart-btn'))
        fireEvent.click(getByTestId('premium-add-to-cart-btn'))
        fireEvent.click(getByTestId('standout-add-to-cart-btn'))
        fireEvent.click(getByTestId('classic-add-to-cart-btn'))

        expect(getByTestId('cart-total')).toHaveTextContent('$2112.94')
      })
    })
  })

  describe('Total Discount Display', () => {
    it('should display total discount for privileged customers', () => {
      const { getByTestId } = render(<App />)

      fireEvent.change(getByTestId('userName-select'), { target: { value: 'REC002' } })

      fireEvent.click(getByTestId('standout-add-to-cart-btn'))
      fireEvent.click(getByTestId('standout-add-to-cart-btn'))
      fireEvent.click(getByTestId('standout-add-to-cart-btn'))
      fireEvent.click(getByTestId('premium-add-to-cart-btn'))

      expect(getByTestId('cart-total-discount')).toHaveTextContent('$69')
    })

    it('should not display total discount for default customers', () => {
      const { queryByTestId, getByTestId } = render(<App />)

      fireEvent.click(getByTestId('standout-add-to-cart-btn'))
      fireEvent.click(getByTestId('standout-add-to-cart-btn'))
      fireEvent.click(getByTestId('standout-add-to-cart-btn'))
      fireEvent.click(getByTestId('premium-add-to-cart-btn'))

      expect(queryByTestId('cart-total-discount')).not.toBeInTheDocument()
    })
  })
})