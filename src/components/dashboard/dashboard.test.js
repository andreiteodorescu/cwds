import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import DashboardComponent from "./dashboard.component";

describe('Dashboard component', () => {
    beforeAll(() => {
        HTMLDialogElement.prototype.showModal = jest.fn();
        HTMLDialogElement.prototype.close = jest.fn();
    });

    test('by checking the Select all checkbox all others will be checked', () => {
        // Arrange
        render(<DashboardComponent/>);

        // Act
        const checkAllCheckbox = screen.getByTestId('dashboard-test').querySelector(".dashboard-header-selectall");
        userEvent.click(checkAllCheckbox);

        // Assert
        const allRowCheckboxes = screen.getByTestId('dashboard-test').querySelectorAll(".dashboard-table-checkbox");
        allRowCheckboxes.forEach(node => {
            expect(node).toBeChecked();
        });
    });

    test('by unchecking the Select all checkbox all others will be unchecked', () => {
        // Arrange
        render(<DashboardComponent/>);

        // Act
        const checkAllCheckbox = screen.getByTestId('dashboard-test').querySelector(".dashboard-header-selectall");
        userEvent.dblClick(checkAllCheckbox);

        // Assert
        const allRowCheckboxes = screen.getByTestId('dashboard-test').querySelectorAll(".dashboard-table-checkbox");
        allRowCheckboxes.forEach(node => {
            expect(node).not.toBeChecked();
        });
    });

    test('by checking all other checkboxes the Select all will be checked', () => {
        // Arrange
        render(<DashboardComponent/>);

        // Act
        const allRowCheckboxes = screen.getByTestId('dashboard-test').querySelectorAll(".dashboard-table-checkbox");
        allRowCheckboxes.forEach(node => {
            userEvent.click(node);
        });

        // Assert
        const checkAllCheckbox = screen.getByTestId('dashboard-test').querySelector(".dashboard-header-selectall");
        expect(checkAllCheckbox).toBeChecked();
    });

    test('by unchecking all other checkboxes the Select all will be unchecked', () => {
        // Arrange
        render(<DashboardComponent/>);

        // Act
        const allRowCheckboxes = screen.getByTestId('dashboard-test').querySelectorAll(".dashboard-table-checkbox");
        allRowCheckboxes.forEach(node => {
            userEvent.dblClick(node);
        });

        // Assert
        const checkAllCheckbox = screen.getByTestId('dashboard-test').querySelector(".dashboard-header-selectall");
        expect(checkAllCheckbox).not.toBeChecked();
    });

    test('by checking one of other checkboxes the Select all will be in an indeterminate state', () => {
        // Arrange
        render(<DashboardComponent/>);

        // Act
        const oneRowCheckbox = screen.getByTestId('dashboard-test').querySelector(".dashboard-table-checkbox");
        userEvent.click(oneRowCheckbox);

        // Assert
        const checkAllCheckbox = screen.getByTestId('dashboard-test').querySelector(".dashboard-header-selectall");
        expect(checkAllCheckbox).toBePartiallyChecked();
    });

    test('Div that contains the Selected text is displayed if checkbox is checked', () => {
        // Arrange
        render(<DashboardComponent/>);

        // Act
        const oneRowCheckbox = screen.getByTestId('dashboard-test').querySelector(".dashboard-table-checkbox");
        userEvent.click(oneRowCheckbox);

        // Assert
        const selectedContainer = screen.getByTestId('dashboard-test').querySelector(".dashboard-header-selected-active");
        expect(selectedContainer).toBeInTheDocument();
    });

    test('Checking one checkbox the Selected text shows 1', () => {
        // Arrange
        render(<DashboardComponent/>);

        // Act
        const oneRowCheckbox = screen.getByTestId('dashboard-test').querySelector(".dashboard-table-checkbox");
        userEvent.click(oneRowCheckbox);

        // Assert
        const selectedNumber = screen.getByTestId('dashboard-test').querySelector(".dashboard-header-selected-active span");
        expect(selectedNumber).toHaveTextContent('1');
    });

    test('Div that contains the None Selected text is displayed if checkbox is unchecked', () => {
        // Arrange
        render(<DashboardComponent/>);

        // Act
        const oneRowCheckbox = screen.getByTestId('dashboard-test').querySelector(".dashboard-table-checkbox");
        userEvent.dblClick(oneRowCheckbox);

        // Assert
        const selectedContainer = screen.getByTestId('dashboard-test').querySelector(".dashboard-header-selected-none");
        expect(selectedContainer).toBeInTheDocument();
    });
});