import React from 'react';

export default function RenderIf({ isTrue, children }) {
    if (isTrue) {
        return <>{children}</>;
    }
    return null;
}
