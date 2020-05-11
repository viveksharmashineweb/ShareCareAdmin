export class QueryResultsModel {
	// fields
	items: any[];
	totalCount: number;
	errorMessage: string;
	code: number;
	result: import("/Users/sws/Downloads/demo3/src/app/core/auth/index").User[];

	constructor(_items: any[] = [], _totalCount: number = 0, _errorMessage: string = '') {
		this.items = _items;
		this.totalCount = _totalCount;
	}
}
