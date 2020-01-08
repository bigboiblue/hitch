import React from "react";
import uuid from "uuid/v4";
import {
    Container, StyledTable, StyledTd, StyledTr, Title,
} from "./styles/TableStyles";
import { TableTheme } from "../styles/GlobalUserTheme";

interface Props {
    tableData: TableData[];
    width?: string;
    theme?: TableTheme;
}


export default function Table(props: Props): React.ReactElement {
    let tableData; let headings;

    function initTableData(): void {
        headings = Object.keys(props.tableData[0]);

        /** Adds row data to array in correct order according to passed headings */
        tableData = [[]];
        for (let i = 0; i < props.tableData.length; i++) {
            let tableDataKeys = Object.keys(props.tableData[i]);
            let tableDataValues = Object.values(props.tableData[i]);
            // eslint-disable-next-line no-loop-func
            headings.forEach((value) => {
                const indexOfHeadingInTableData = tableDataKeys.indexOf(value);
                if (indexOfHeadingInTableData !== -1) { //If heading exists in row, add <td> version
                    if (tableData[i] === undefined) {
                        tableData[i] = [];
                    }
                    tableData[i].push(<StyledTd theme={props.theme} key={uuid()}>{tableDataValues[indexOfHeadingInTableData]}</StyledTd>); //eslint-disable-line
                }
            });
        }
    }

    if (props.tableData) {
        initTableData();
    }


    return (
        <Container width={props.width}>
            {/* <TableRow tableRowData={headingRowData} headings={headings} /> */}
            <StyledTable theme={props.theme}>
                <tbody>
                    {
                        <StyledTr theme={props.theme}>
                            {headings ? headings.map((value) => (<Title theme={props.theme} key={uuid()}><h3 key={uuid()}>{value}</h3></Title>)) : <></> }
                        </StyledTr>
                    }
                    {
                        tableData ? tableData.map((rowData) => <StyledTr theme={props.theme} key={uuid()}>{rowData}</StyledTr>) : <></>
                    }
                </tbody>
            </StyledTable>
        </Container>
    );
}
