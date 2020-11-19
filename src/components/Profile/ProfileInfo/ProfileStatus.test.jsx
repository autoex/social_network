import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'Status here..'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('Status here..');
    });


    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status={'Status here..'}/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation input should not be displayed", () => {
        const component = create(<ProfileStatus status={'Status here..'}/>);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });


    test("after creation span should be contains correct status", () => {
        const component = create(<ProfileStatus status={'Status here..'}/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe('Status here..')
    });


});