import { writable } from 'svelte/store';

export default writable<{ dragging: any }>({
	dragging: null
});
