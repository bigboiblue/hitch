import React from "react";
import uuid from "uuid/v4";
import {
    Container, StyledTable, StyledTd, StyledTr,
} from "./styles/TableStyles";

interface Props {
    tableData: TableData[];
    width?: string;
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
                    tableData[i].push(<StyledTd key={uuid()}>{tableDataValues[indexOfHeadingInTableData]}</StyledTd>); //eslint-disable-line
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
            <StyledTable>
                <tbody>
                    {
                        <StyledTr>
                            {headings ? headings.map((value) => (<StyledTd key={uuid()}><h3 key={uuid()}>{value}</h3></StyledTd>)) : <></> }
                        </StyledTr>
                    }
                    {
                        tableData ? tableData.map((rowData) => <StyledTr key={uuid()}>{rowData}</StyledTr>) : <></>
                    }
                </tbody>
            </StyledTable>
        </Container>
    );
}
