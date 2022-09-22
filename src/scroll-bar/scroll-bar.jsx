import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
// import 'overlayscrollbars/overlayscrollbars.css';
// import { OverlayScrollbars } from 'overlayscrollbars';
// OverlayScrollbarsComponent(document.querySelector('body'), {
//     overflow: {
//         x: 'hidden',
//     },
// });

<OverlayScrollbarsComponent
    options={{ scrollbars: { autoHide: "scroll" } }}
    extensions={["extensionA", "extensionB"]}
></OverlayScrollbarsComponent>