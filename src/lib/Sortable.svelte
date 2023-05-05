<script lang="ts">
	import store from './store.js';
	import Sortable from 'sortablejs';
	import type { MultiDragEvent } from './types.js';
	import { insertNodes, removeNodes, createCustoms, handleStateChanges } from './util.js';

	export let list: any[] = [];
	export let dataIdAttr = 'data-id';
	export let setList: Function;
	// export let selectedClass = 'sortable-selected';
	// export let chosenClass = 'sortable-chosen';

	let sortable: Sortable = null!;
	const useCreate = (el: HTMLDivElement) => {
		sortable = Sortable.create(el, {
			animation: 150,
			onUpdate(evt: MultiDragEvent) {
				// const { list, setList } = this.props;
				const customs = createCustoms(evt, list);
				removeNodes(customs);
				insertNodes(customs);
				const newList = handleStateChanges(customs, list);
				return setList(newList, sortable, $store);
			}
		});
	};
</script>

<div use:useCreate>
	<slot />
</div>
